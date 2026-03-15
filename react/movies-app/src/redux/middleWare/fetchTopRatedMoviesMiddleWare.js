import axios from "axios";
import movieSlice from "../slices/movieSlice";

const moviesAction = movieSlice.actions;
const fetchMoviesMiddleWare = (param) => {  

    return function (dispatch) {
        dispatch(moviesAction.movieLoading(true));
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?page=${param.pageNo}`,
                {
                    headers: { Authorization: `Bearer ${param.apiKey}` },
                },
            )
            .then((response) => {
                dispatch(moviesAction.movieData(response.data.results));
            })
            .catch(() => {
                dispatch(moviesAction.movieError());
            })
            .finally(()=> {
                dispatch(moviesAction.movieLoading(false));
            })
    };
};

export default fetchMoviesMiddleWare;
