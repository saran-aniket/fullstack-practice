import React, { useEffect } from "react";
import { apiKey } from "../../constants/app-constants";
import { useDispatch, useSelector } from "react-redux";
import fetchTrendingMovieMiddleWare from "../../redux/middleWare/fetchTrendingMovieBannerMiddleWare";

function Banner() {
    // const [bannerImage, setBannerImage] = useState();
    // const [bannerTitle, setBannerTitle] = useState();
    const dispatchFn = useDispatch();
    const bannerMovie = useSelector((store) => store.banner);
    useEffect(() => {
        dispatchFn(fetchTrendingMovieMiddleWare({ apiKey: apiKey }));
    }, []);

    if (bannerMovie.loading) {
        return (
            <div className="font-bold flex justify-evenly">Loading ....</div>
        );
    } else if (bannerMovie.error) {
        return (
            <div className="font-bold flex justify-evenly">
                Something went wrong
            </div>
        );
    } else {
        return (
            <>
                <div
                    className="h-[60vh] my-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerMovie.data.backdrop_path})` }}
                >
                    <div className="h-[60%] text-white text-2xl"></div>
                    <div className="h-[40%] text-white text-2xl text-left p-5">
                        <p className="font-medium py-3">{bannerMovie.data.title}</p>
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
}

export default Banner;
