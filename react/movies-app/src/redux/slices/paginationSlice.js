import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        pageNo: 1,
    },
    reducers: {
        handleNextPage(state) {
            state.pageNo += 1;
        },
        handlePrevPage(state) {
            if (state.pageNo != 1) {
                state.pageNo -= 1;
            }
        },
    },
});

export default paginationSlice;
