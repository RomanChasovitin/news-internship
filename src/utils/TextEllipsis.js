const textEllipsis = (str, len = 20, useEllipsis = true) => {
  if (str.length) {
    const sliced = str.slice(0, len)
    return `${sliced}${useEllipsis ? '...' : ''}`
  }

  return str
}

export { textEllipsis }
