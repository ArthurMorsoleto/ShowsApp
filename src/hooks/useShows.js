import React, { useEffect } from "react";
import { useState } from "react";
import showApi from "../api/showApi";

export const useShows = () => {
    const [showsState, setShowsState] = useState([]);

    useEffect(() => {
        showApi.get("/shows")
            .then(response => {
                setShowsState(response.data);
            })
    }, [])

    return { shows: showsState };
}