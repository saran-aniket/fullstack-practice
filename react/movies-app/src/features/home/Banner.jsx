import React, { useEffect, useState } from "react";
// import scenery from "../assets/scenery.jpg";
import axios from "axios";
import { apiKey } from "../../constants/app-constants";

function Banner() {
    const [bannerImage, setBannerImage] = useState();
    const [bannerTitle, setBannerTitle] = useState();
    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/trending/movie/day", {
                headers: { Authorization: `Bearer ${apiKey}` },
            })
            .then((response) => {
                // console.log(response.data.results);
                setBannerTitle(response.data.results[0].original_title);
                setBannerImage(`https://image.tmdb.org/t/p/original/${response.data.results[0].backdrop_path}`);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div
                className="h-[60vh] my-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="h-[60%] text-white text-2xl"></div>
                <div className="h-[40%] text-white text-2xl text-left p-5">
                    <p className="font-medium py-3">{bannerTitle}</p>
                    <div className="flex justify-start gap-5 py-3">
                        <button
                            type="button"
                            className="bg-gray-400 w-20 text-[20px]"
                        >
                            Play
                        </button>
                        <button
                            type="button"
                            className="bg-gray-400 w-50 text-[20px]"
                        >
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
