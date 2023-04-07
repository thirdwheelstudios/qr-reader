const isValidUrl = (url: string) => {
  const regex = /^(http(s)?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,20}(\/\S*)?$/

  return regex.test(url)
}

export { isValidUrl }
