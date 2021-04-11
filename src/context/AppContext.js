import { createContext } from "react";

export const AppContext = createContext()

export const appReducer = (state, action) => {
    switch (action.type) {
        case CREATE_LIST_ACTION:
            return { showList: action.payload }
        case SET_SELECTED_ITEM_ACTION:
            return { ...state, selectedItem: action.payload }
        case ADD_ITEM:
            const showList = state.showList;
            showList.push(action.payload)
            console.log(showList)
            return { ...state, showList }
        default:
            return state
    }
}

export const initialState = {
    showList: new Array(),
    selectedItem: null
}

export const CREATE_LIST_ACTION = "createList"
export const SET_SELECTED_ITEM_ACTION = "setSelectedItem"
export const ADD_ITEM = "addItem"