import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUpcomingMovies = createAsyncThunk('data/getUpcomingMovies', async () => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
    return await response.json();
})

const initialState = {
    status: '',
    movies: [],
}

const upcomingMoviesSlice = createSlice({
    name: 'upcoming',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUpcomingMovies.pending, (state) => {
            state.status = 'pending';
        }).addCase(getUpcomingMovies.fulfilled, (state, { payload }) => {
            state.status = 'done';
            state.movies = payload.results;
        })
    }
})

export default upcomingMoviesSlice.reducer
