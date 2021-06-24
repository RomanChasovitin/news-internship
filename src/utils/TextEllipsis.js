const textEllipsis = (str, len = 30, useEllipsis = true) => {
  if (!str || str.length <= len) return str
  const sliced = str.slice(0, len - (useEllipsis ? 3 : 0))
  return `${sliced}${useEllipsis ? '...' : ''}`
}

export { textEllipsis }
