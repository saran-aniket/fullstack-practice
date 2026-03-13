import React from "react";
import movieIcon from "../assets/movie-icon.jpg"

function TestComponent() {
    return (
        <div className="group relative h-64 w-96 overflow-hidden rounded-xl bg-gray-200 cursor-pointer">
            <img
                src={movieIcon}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-bold text-xl translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    View Details
                </span>
            </div>
        </div>
    );
}

export default TestComponent;
