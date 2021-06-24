export const getEntities = name => state => state[name].entities
export const getLoading = name => state => state[name].isLoading
export const getError = name => state => state[name].error
export const getPagination = name => state => state[name].pagination

export const getHasNextPage = name => state => {
  const {
    pagination: { totalResults },
    entities,
  } = state[name]

  return totalResults > entities.length
}
