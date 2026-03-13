import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";
import axios from "axios";
import { apiKey } from "../constants/app-constants";

function Movies() {
    const [pageNo, setPageNo] = useState(1);
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);

    console.log(watchList);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/trending/movie/day", {
                headers: { Authorization: `Bearer ${apiKey}` },
            })
            .then((response) => {
                console.log(response.data);
                setMovies(response.data.results);
            });
    }, []);

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
    }

    const removeFromWatchList = (movieObj) => {
        setWatchList(watchList.filter((item) => item.id !== movieObj.id));
    }

    return (
        <>
            <div className="mx-5">
                <p className="font-bold pb-5">Trending Movies</p>
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
