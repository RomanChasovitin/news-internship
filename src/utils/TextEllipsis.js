const textEllipsis = (str, len = 20, useEllipsis = true) => {
  const sliced = str.slice(0, len)
  return `${sliced}${useEllipsis ? '...' : ''}`
}

export { textEllipsis }
