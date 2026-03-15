import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { apiKey } from "../../constants/app-constants";
import { WatchListContext } from "../../context/WatchListContext";
import { useDispatch, useSelector } from "react-redux";
import paginationSlice from "../../redux/slices/paginationSlice";
import fetchMoviesMiddleWare from "../../redux/middleWare/fetchTopRatedMoviesMiddleWare";

function Movies() {
    // const [pageNo, setPageNo] = useState(1);
    // const [movies, setMovies] = useState([]);
    // const [watchList, setWatchList] = useState(() => {
    //     let fetchWatchList = localStorage.getItem("watchList");
    //     if (fetchWatchList) {
    //         return JSON.parse(fetchWatchList);
    //     } else {
    //         return [];
    //     }
    // });

    const movies = useSelector((store) => store.movies);
    const pageNo = useSelector((store) => store.pagination.pageNo);
    const dispatchFn = useDispatch();
    const { watchList, addToWatchList, removeFromWatchList } =
        useContext(WatchListContext);

    useEffect(() => {
        dispatchFn(fetchMoviesMiddleWare({ pageNo: pageNo, apiKey: apiKey }));
    }, [pageNo]);

    //Commenting for adding to Redux
    // const handleNextPageFn = () => {
    //     setPageNo(pageNo + 1);
    // };
    // const handlePreviousPageFn = () => {
    //     if (pageNo == 1) {
    //         setPageNo(1);
    //     } else {
    //         setPageNo(pageNo - 1);
    //     }
    // };

    //Commenting to use Context API
    // const addToWatchList = (movieObj) => {
    //     let updatedWatchList = [...watchList, movieObj];
    //     setWatchList(updatedWatchList);
    //     localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    // };

    // const removeFromWatchList = (movieObj) => {
    //     let updatedWatchList = watchList.filter(
    //         (item) => item.id !== movieObj.id,
    //     );
    //     setWatchList(updatedWatchList);
    //     localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    // };

    if (movies.loading) {
        return <div className="font-bold flex justify-evenly">Loading ....</div>;
    } else if (movies.error) {
        return <div className="font-bold flex justify-evenly">Something went wrong</div>;
    } else {
        return (
            <>
                <div className="mx-5">
                    <p className="font-bold pb-5">Top Rated</p>
                    <div className="flex flex-wrap justify-evenly gap-8">
                        {movies.data.map((movieObj) => {
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
                    handlePreviousPageFn={() =>
                        dispatchFn(paginationSlice.actions.handlePrevPage())
                    }
                    handleNextPageFn={() =>
                        dispatchFn(paginationSlice.actions.handleNextPage())
                    }
                />
            </>
        );
    }
}

export default Movies;
