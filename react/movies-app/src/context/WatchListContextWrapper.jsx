import { useState } from "react";
import {WatchListContext} from "./WatchListContext";

export default function WatchListContextWrapper({ children }) {
    const [watchList, setWatchList] = useState(() => {
        let fetchWatchList = localStorage.getItem("watchList");
        if (fetchWatchList) {
            return JSON.parse(fetchWatchList);
        } else {
            return [];
        }
    });

    const addToWatchList = (movieObj) => {
        let updatedWatchList = [...watchList, movieObj];
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    };

    const removeFromWatchList = (movieObj) => {
        let updatedWatchList = watchList.filter(
            (item) => item.id !== movieObj.id,
        );
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    };

    return (
        <WatchListContext.Provider
            value={{
                addToWatchList,
                removeFromWatchList,
                watchList,
                setWatchList,
            }}
        >
            {children} {" "}
        </WatchListContext.Provider>
    );
}