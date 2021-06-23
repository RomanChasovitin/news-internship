export const getEntities = name => state => state[name].entities
export const getLoading = name => state => state[name].isLoading
export const getError = name => state => state[name].error
