import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        data: null,
        error: false,
        loading: true
    },
    reducers: {
        movieLoading(state, action){
            state.loading = action.payload
        },

        movieError(state){
            state.loading = false;
            state.error = true;
        },

        movieData(state, action){
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        }
    }
});

export default movieSlice;