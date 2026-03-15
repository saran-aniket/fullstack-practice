import axios from "axios";
import bannerSlice from "../slices/bannerSlice";

const bannerAction = bannerSlice.actions;
const fetchTrendingMovieMiddleWare = (param) => {

    return function (dispatch) {
        dispatch(bannerAction.bannerLoading(true));
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day`,
                {
                    headers: { Authorization: `Bearer ${param.apiKey}` },
                },
            )
            .then((response) => {
                dispatch(bannerAction.bannerData(response.data.results[0]));
            })
            .catch(() => {
                dispatch(bannerAction.bannerError());
            })
            .finally(()=> {
                dispatch(bannerAction.bannerLoading(false));
            })
    };
};

export default fetchTrendingMovieMiddleWare;
