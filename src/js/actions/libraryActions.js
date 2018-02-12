import * as types from "src/js/constants/actionTypes"
export const searchImages = (query) => {
    return {
        type: types.SEARCH_IMAGES,
        query
    }
}

export const addImages = (images) => {
    return {
        type: types.ADD_IMAGES,
        images
    }
}

export const selectImage = (id) => {
    return {
        type: types.SELECT_IMAGE,
        id
    }
}
