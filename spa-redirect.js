;(function () {
  var locationData = window.location
  if (locationData.search[1] !== 'p' || !locationData.search) {
    return
  }

  var decoded = locationData.search
    .slice(1)
    .split('&')
    .map(function (item) {
      return item.replace(/~and~/g, '&')
    })
    .join('?')

  var target = decoded.replace(/^p=\/?/, '')
  var nextUrl =
    locationData.pathname.replace(/\/$/, '') +
    '/' +
    target
      .replace(/^\/+/, '')
      .replace(/\?q=/, '?')

  window.history.replaceState(null, '', nextUrl)
})()
