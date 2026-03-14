import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { apiKey } from "../../constants/app-constants";

function Movies() {
    const [pageNo, setPageNo] = useState(1);
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState(() => {
        let fetchWatchList = localStorage.getItem("watchList");
        if (fetchWatchList) {
            return JSON.parse(fetchWatchList);
        } else {
            return [];
        }
    });

    console.log(movies);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?page=${pageNo}`,
                {
                    headers: { Authorization: `Bearer ${apiKey}` },
                },
            )
            .then((response) => {
                // console.log(response.data);
                setMovies(response.data.results);
            });
    }, [pageNo]);

    const handleNextPageFn = () => {
        setPageNo(pageNo + 1);
    };
    const handlePreviousPageFn = () => {
        if (pageNo == 1) {
            setPageNo(1);
        } else {
            setPageNo(pageNo - 1);
        }
    };

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
        <>
            <div className="mx-5">
                <p className="font-bold pb-5">Top Rated</p>
                <div className="flex flex-wrap justify-evenly gap-8">
                    {movies.map((movieObj) => {
                        return (
                            <MovieCard
                                key={movieObj.original_title}
                                movieObj={movieObj}
                                addToWatchList={addToWatchList}
                                removeFromWatchList={removeFromWatchList}
                                watchList={watchList}
                            />
                        );
                    })}
                </div>
            </div>
            <Pagination
                pageNo={pageNo}
                handlePreviousPageFn={handlePreviousPageFn}
                handleNextPageFn={handleNextPageFn}
            />
        </>
    );
}

export default Movies;
