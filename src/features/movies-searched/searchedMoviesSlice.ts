import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const searchMovies = createAsyncThunk('search/movies', async (value: string) => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&query=${value}`);
    return await response.json();
})

const initialState = {
    status: '',
    results: [],
}

const searchedMoviesSlice = createSlice({
    name: 'searchedMovies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(searchMovies.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(searchMovies.fulfilled, (state, action) => {
            state.status = 'done';
            state.results = action.payload.results;
        }).addCase(searchMovies.rejected, (state, action) => {
            state.status = 'rejected';
        })
    }
})

export default searchedMoviesSlice.reducer;
