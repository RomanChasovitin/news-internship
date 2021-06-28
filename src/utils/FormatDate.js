const formatDate = datestring => {
  const date = new Date(datestring)

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

export { formatDate }
