import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        data: null,
        error: false,
        loading: true
    },
    reducers: {
        bannerLoading(state, action){
            state.loading = action.payload
        },

        bannerError(state){
            state.loading = false;
            state.error = true;
        },

        bannerData(state, action){
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        }
    }
});

export default bannerSlice;