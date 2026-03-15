import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import paginationSlice from "./slices/paginationSlice";
import movieSlice from "./slices/movieSlice";
import bannerSlice from "./slices/bannerSlice";

const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        pagination: paginationSlice.reducer,
        movies: movieSlice.reducer,
        banner: bannerSlice.reducer
    }
})

export default store;