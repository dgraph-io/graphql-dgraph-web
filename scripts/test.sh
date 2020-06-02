#!/bin/bash 

GATSBY="${GATSBY:-gatsby}"
PUBLIC="${PUBLIC:-public}"
MASTER="${MASTER:-master}"
RND="${RND:-rnd}"
HOST="${HOST:-https://graphql.dgraph.io/}"

VERSIONS_ARRAY=(
	'master'
    'v20.03.1'
)

joinVersions() {
	versions=$(printf ",%s" "${VERSIONS_ARRAY[@]}")
	echo "${versions:1}"
}

VERSION_STRING=$(joinVersions)

GATSBY_URL=${HOST}
GATSBY_VERSIONS=${VERSION_STRING} \
GATSBY_CURRENT_BRANCH=${1} \
GATSBY_CURRENT_VERSION=${2} ${GATSBY} \
build --prefix-paths\

mv ${PUBLIC} ${2}
mkdir ${RND} 
cp -r ${2} ${RND}/

echo "${1} , ${2}"
