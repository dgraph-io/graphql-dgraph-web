#!/bin/bash
# This script runs in a loop (configurable with LOOP), checks for updates to the
# docs on certain branches and rebuilds the public
# folder for them. It has be made more generalized, so that we don't have to
# hardcode versions.

# Warning - Changes should not be made on the server on which this script is running
# becauses this script does git checkout and merge.

set -e

GREEN='\033[32;1m'
RESET='\033[0m'
HOST="${HOST:-http://localhost:8000/}"
# Name of output public directory
PUBLIC="${PUBLIC:-public}"
# LOOP true makes this script run in a loop to check for updates
LOOP="${LOOP:-true}"
# Binary of hugo command to run.
GATSBY="${GATSBY:-npm}"

VERSIONS_ARRAY=(
    'master'
    'v20.03.1'
)

joinVersions() {
    versions=$(printf ",%s" "${VERSIONS_ARRAY[@]}")
    echo "${versions:1}"
}

function version() { echo "$@" | gawk -F. '{ printf("%03d%03d%03d\n", $1,$2,$3); }'; }

rebuild() {
    echo -e "$(date) $GREEN Updating docs for branch: $1.$RESET"

    # The latest documentation is generated in the root of /public dir
    # Older documentations are generated in their respective `/public/vx.x.x` dirs
    dir=' '
    if [[ $2 != "${VERSIONS_ARRAY[0]}" ]]; then
        dir=$2
    fi

    VERSION_STRING=$(joinVersions)

    rm -rf .cache
    rm -rf node_modules
    ${GATSBY} install

    if [[ $2 != "${VERSIONS_ARRAY[0]}" ]]; then
        GATSBY_URL=${HOST} \
            GATSBY_VERSIONS=${VERSION_STRING} \
            GATSBY_CURRENT_BRANCH=${1} \
            GATSBY_CURRENT_VERSION=${2} ${GATSBY} \
            run build-version
    else
        GATSBY_URL=${HOST} \
            GATSBY_VERSIONS=${VERSION_STRING} \
            GATSBY_CURRENT_BRANCH=${1} \
            GATSBY_CURRENT_VERSION=${2} ${GATSBY} \
            run build
    fi
    mv ${PUBLIC} ${2}
}

branchUpdated() {
    local branch="$1"
    git checkout -q "$1"
    UPSTREAM=$(git rev-parse "@{u}")
    LOCAL=$(git rev-parse "@")

    if [ "$LOCAL" != "$UPSTREAM" ]; then
        git merge -q origin/"$branch"
        return 0
    else
        return 1
    fi
}

publicFolder() {
    dir=' '
    if [[ $1 == "${VERSIONS_ARRAY[0]}" ]]; then
        echo "${PUBLIC}"
    else
        echo "${PUBLIC}/$1"
    fi
}

checkAndUpdate() {
    local version="$1"
    local branch=""

    if [[ $version == "master" ]]; then
        branch="master"
    else
        branch="rel/$version"
    fi

    if branchUpdated "$branch"; then
        git merge -q origin/"$branch"
        rebuild "$branch" "$version"
    fi

    folder=$(publicFolder "$version")
    if [ "$firstRun" = 1 ] || [ ! -d "$folder" ]; then
        rebuild "$branch" "$version"
    fi
}

firstRun=1
while true; do
    # Lets move to the docs directory.
    echo -e $(dirname "$0")

    pushd "$(dirname "$0")/.." >/dev/null

    currentBranch=$(git rev-parse --abbrev-ref HEAD)

    # if branchUpdated "master"; then
    #     echo -e "$(date) $GREEN Theme has been updated. Now will update the docs.$RESET"
    # fi

    # Now lets check the theme.
    echo -e "$(date)  Starting to check branches."
    git remote update >/dev/null

    for version in "${VERSIONS_ARRAY[@]}"; do
        checkAndUpdate "$version"
    done

    mkdir -p ${PUBLIC}

    for version in "${VERSIONS_ARRAY[@]}"; do
        if [[ $version == "master" ]]; then
            [ -d ${version} ] && mv ${version}/* ${PUBLIC}/ && rm -rf ${version} 
        else
            [ -d ${version} ] && mv ${version} ${PUBLIC}/
        fi
    done

    echo -e "$(date)  Done checking branches.\n"

    git checkout -q "$currentBranch"
    popd >/dev/null

    firstRun=0
    if ! $LOOP; then
        exit
    fi
    sleep 60
done
