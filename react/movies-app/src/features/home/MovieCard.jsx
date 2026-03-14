import React from "react";

function MovieCard({
    movieObj,
    watchList,
    addToWatchList,
    removeFromWatchList,
}) {
    const isMovieInWatchList = (movieObj) => {
        for (let movie of watchList) {
            if (movieObj.id === movie.id) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className="group relative h-32 w-52 hover:scale-[130%] duration-300">
            <div
                className={`absolute inset-0 bg-cover bg-center shadow-xl rounded-md group-hover:opacity-50 z-0`}
                style={{
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}
                }
            ></div>
            <div className="absolute z-10 w-[100%] hidden group-hover:flex justify-center items-start flex-col">
                <div className="w-[100%] font-semibold text-center bg-black/40 bg-opacity-50 rounded-md">
                    <p className="text-white">{movieObj.title}</p>
                </div>
                <div className="size-20 text-2xl hover:cursor-pointer">
                    {!isMovieInWatchList(movieObj) ? (
                        <i
                            className="fa-regular fa-heart"
                            onClick={() => addToWatchList(movieObj)}
                        ></i>
                    ) : (
                        <i
                            className="fa-solid fa-heart text-red-500"
                            onClick={() => removeFromWatchList(movieObj)}
                        ></i>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
