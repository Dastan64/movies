import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root/Root";
import App from "../components/App/App";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import SearchResults from "../routes/SearchResults/SearchResults";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <App/>,
            },
            {
                path: 'movies/:id',
                element: <MovieDetail/>
            },
            {
                path: 'results',
                element: <SearchResults/>
            },
        ],
    },
])

export default router;
