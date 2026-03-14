import React, { useState } from "react";
import TestComponent from "./TestComponent";
import { genreIds } from "../constants/app-constants";

function Watchlist() {
    const [watchlist] = useState(() => {
        let fetchWatchList = localStorage.getItem("watchList");
        if(fetchWatchList){
          return JSON.parse(fetchWatchList);
        }else{
          return [];
        }
    });

    return (
        <>
            <div className="m-4">
                <table className="w-[100%] border-separate border-gray-300">
                    <thead className="">
                        <tr className="bg-gray-300 h-[7rem]">
                            <th className="w-[40%]">Title</th>
                            <th className="w-[20%]">Rating</th>
                            <th className="w-[20%]">Genre</th>
                            <th className="w-[20%]">Popularity</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100 text-center">
                        {watchlist.map((movieObj) => {
                            return (
                                <tr key={movieObj.id}>
                                    <td className="m-4 flex justify-normal items-center gap-8">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                                            alt="img"
                                            className="w-[50%] bg-cover bg-center"
                                        />
                                        {movieObj.title}
                                    </td>
                                    <td>{movieObj.vote_average}</td>
                                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                                    <td>{movieObj.vote_count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Watchlist;
