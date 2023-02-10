import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getTopRatedMovies = createAsyncThunk('data/getTopRatedMovies', async () => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
    return await response.json();
})

const initialState = {
    status: '',
    movies: [],
}

const topRatedMoviesSlice = createSlice({
    name: 'top rated',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getTopRatedMovies.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.status = 'done';
            state.movies = action.payload.results;
        })
    }
})

export default topRatedMoviesSlice.reducer
