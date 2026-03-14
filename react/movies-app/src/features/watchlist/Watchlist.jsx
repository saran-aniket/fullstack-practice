import React, { useState, useEffect } from "react";
import { genreIds } from "../../constants/app-constants";

function Watchlist() {
    const [watchList, setWatchList] = useState(() => {
        let fetchWatchList = localStorage.getItem("watchList");
        if (fetchWatchList) {
            return JSON.parse(fetchWatchList);
        } else {
            return [];
        }
    });
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [searchInput, setSearchInput] = useState([]);

    useEffect(() => {
        let temp = watchList.map((movie) => {
            return genreIds[movie.genre_ids[0]];
        });
        // set stores only the unique entries
        temp = new Set(temp);
        console.log(temp);
        setCategoryList(["All Genres", ...temp]);
    }, [watchList]);

    const handleRatingSortAsc = () => {
        watchList.sort((a, b) => a.vote_average - b.vote_average);
        setWatchList([...watchList]);
    };
    const handleRatingSortDesc = () => {
        watchList.sort((a, b) => b.vote_average - a.vote_average);
        setWatchList([...watchList]);
    };

    const handleCategorySelection = (category) => {
        setCategory(category);
    };

    const handleSearchInputChange = (event) => {
        console.log(event.target.value);
        setSearchInput(event.target.value.toLowerCase());
    };

    return (
        <div className="m-4">
            <div className="w-[100%] h-30 bg-gray-50">
                <input
                    type="text"
                    name="search"
                    placeholder="Search Movie"
                    className="m-5 p-2 w-[30%] border-2"
                    onChange={handleSearchInputChange}
                />
                <div className="m-5 flex gap-5">
                    {categoryList.map((item) => {
                        const isActive = category == item;
                        return (
                            <div
                                key={item}
                                className={`p-2 h-12 w-[9rem] flex items-center justify-center font-bold text-center bg-sky-400 rounded-md hover:bg-sky-700 hover:cursor-pointer ${isActive ? "bg-sky-700" : "bg-sky-400"}`}
                                onClick={() => handleCategorySelection(item)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <table className="w-[100%] border-separate border-gray-300">
                    <thead className="">
                        <tr className="bg-gray-300 h-[7rem]">
                            <th className="w-[40%]">Title</th>
                            <th className="w-[20%]">
                                <i
                                    className="fa-solid fa-arrow-down hover:cursor-pointer"
                                    onClick={handleRatingSortAsc}
                                ></i>
                                Rating
                                <i
                                    className="fa-solid fa-arrow-up hover:cursor-pointer"
                                    onClick={handleRatingSortDesc}
                                ></i>
                            </th>
                            <th className="w-[20%]">Genre</th>
                            <th className="w-[20%]">Popularity</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100 text-center">
                        {watchList
                            .filter((movieObj) => {
                                if(searchInput === ""){
                                    return true;
                                }
                                if (movieObj.title.toLowerCase().includes(searchInput)) {
                                    return true;
                                } else {
                                    return false;
                                }
                            })
                            .filter((movieObj) => {
                                console.log(category);

                                if (
                                    category === "" ||
                                    category === "All Genres"
                                ) {
                                    return true;
                                } else {
                                    return (
                                        genreIds[movieObj.genre_ids[0]] ===
                                        category
                                    );
                                }
                            })
                            .map((movieObj) => {
                                return (
                                    <tr key={movieObj.id}>
                                        <td className="m-4 flex justify-normal items-center gap-8">
                                            <img
                                                src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                                                alt="img"
                                                className="w-[50%] bg-cover bg-center rounded-md"
                                            />
                                            {movieObj.title}
                                        </td>
                                        <td>{movieObj.vote_average}</td>
                                        <td>
                                            {genreIds[movieObj.genre_ids[0]]}
                                        </td>
                                        <td>{movieObj.vote_count}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Watchlist;
