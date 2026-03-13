import React from "react";
import { Link } from "react-router-dom";
import movieIcon from "../assets/movie-icon.jpg";

function NavBar() {
    return (
        <div className="flex justify-start gap-5 bg-black">
            <Link to="/" className="w-12">
                <img src={movieIcon} alt="movieIcon" />
            </Link>
            <div className="flex items-center gap-5 text-red-600">
                <Link to="/" className="hover:bg-slate-300 rounded-md p-1">
                    Home
                </Link>
                <Link
                    to="/watchlist"
                    className="hover:bg-slate-300 rounded-md p-1"
                >
                    WatchList
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
