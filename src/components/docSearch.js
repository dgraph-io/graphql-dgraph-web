if (window.docsearch) {
  var version = "latest"
  var path = window.location.pathname
  var arr = /(?:\/)?((?:master)|(?:v[0-9][^\/]+))(?:\/)?.*$/.exec(path)
  if (arr != null && arr.length > 1) {
    version = arr[1]
  }
  window.docsearch({
    apiKey: "fe4cbc1640c6c87bbc5f099902d86f97",
    indexName: "dgraph",
    inputSelector: "#algolia-doc-search",
    algoliaOptions: { facetFilters: ["version:" + version] },
    debug: false // Set debug to true if you want to inspect the dropdown
  })
}
