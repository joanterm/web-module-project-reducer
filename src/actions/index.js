export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const ADD_M_PLUS = "ADD_M_PLUS"
export const ADD_MR = "ADD_MR"
export const ADD_MC = "ADD_MC"

export const addOne = () => {
    return({
        type: ADD_ONE
    });
}

export const applyNumber = (number) => {
    return({
        type: APPLY_NUMBER, 
        payload: number
    });
}

export const changeOperation = (operator) => {
    return({
        type: CHANGE_OPERATION,
        payload: operator
    })
}

export const clearDisplay = () => {
    return({
        type: CLEAR_DISPLAY
    })
}

export const addMPlus = () => {
    return({
        type: ADD_M_PLUS
    })
}

export const addMR = () => {
    return({
        type: ADD_MR
    })
}

export const addMC = () => {
    return({
        type: ADD_MC
    })
}