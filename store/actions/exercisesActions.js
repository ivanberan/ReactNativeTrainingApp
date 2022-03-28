
export const SET_FAVOURITE = 'SET_FAVOURITE'
export const SET_FILTER = 'SET_FILTER'
export const setFavourite = (id) => {
    return {
        type: SET_FAVOURITE,
        exerciseId:id
    }
}
export const setFilter = (setFilters) => {
    return {
        type: SET_FILTER,
        filters:setFilters
    }
}