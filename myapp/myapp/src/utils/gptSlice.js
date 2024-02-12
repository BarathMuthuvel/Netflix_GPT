import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        searchMoviesResult: null
    },
    reducers: {
        toggleGptSearchView : (state,action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMoviesResult : (state,action) => {
            state.searchMoviesResult = action.payload;
        }

    }
})

export const { toggleGptSearchView ,addMoviesResult} = gptSlice.actions;

export default gptSlice.reducer;