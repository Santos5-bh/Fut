function loadFakeApi(filePath) {
  const api = {
    loaded: false,
    origin: filePath,
    content: null,
  }

  const loadPromise = fetch(filePath)
    .then(res => res.json())
    .then(content => {
      api.content = content
      api.loaded = true
    })

  api.get = async () => {
    if (!api.loaded)
      await loadPromise

    return api.content
  }

  return api
}
