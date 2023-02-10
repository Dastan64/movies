import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPopularMovies = createAsyncThunk('data/getPopularMovies', async () => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
    return await response.json();
})


const initialState = {
    status: '',
    movies: [],
}

const popularMoviesSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPopularMovies.pending, (state) => {
            state.status = 'pending';
        }).addCase(getPopularMovies.fulfilled, (state, action) => {
            state.status = 'done';
            state.movies = action.payload.results;
        })
    }
})

export default popularMoviesSlice.reducer
