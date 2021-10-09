import { UI_FINISH_LOADING, UI_REMOVE_ERROR, UI_SET_ERROR, UI_START_LOADING } from "../types/uiType";

export const setError = (err) => ({
    type: UI_SET_ERROR,
    payload: err
})

export const removeError = () => ({
    type: UI_REMOVE_ERROR
})

export const startLoading = () => ({
    type: UI_START_LOADING
})

export const finishLoading = () => ({
    type: UI_FINISH_LOADING
})