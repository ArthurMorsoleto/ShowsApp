import React, { useContext, useEffect } from "react";
import { useState } from "react";
import showApi from "../api/ShowApi";
import { AppContext, CREATE_LIST_ACTION, SET_SELECTED_ITEM_ACTION } from "../context/AppContext";

export const useShows = () => {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        if (state.showList.length === 0) {
            showApi.get("/shows")
                .then(response => {
                    const action = {
                        type: CREATE_LIST_ACTION,
                        payload: response.data
                    }
                    dispatch(action)

                    const setItemAction = {
                        type: SET_SELECTED_ITEM_ACTION,
                        payload: response.data[0].id
                    }
                    dispatch(setItemAction);
                })
        }
    }, [])

    return { shows: state.showList };
}