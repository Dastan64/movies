import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=ru`);
        return await response.json();
    }
)

const initialState = {
    status: '',
    trendingMovies: [],
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'done';
            state.trendingMovies = action.payload.results;
        })
    }
})

export default moviesSlice.reducer
