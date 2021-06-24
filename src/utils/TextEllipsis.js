const textEllipsis = (str, len = 20, useEllipsis = true) => {
  if (!str.length || str.length <= len) return str
  const sliced = str.slice(0, len - (useEllipsis ? 3 : 0))
  return `${sliced}${useEllipsis ? '...' : ''}`
}

export { textEllipsis }
