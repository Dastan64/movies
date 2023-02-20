import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root/Root";
import App from "../components/App/App";
import MovieDetail from "../components/MovieDetail/MovieDetail";

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
        ],
    },
])

export default router;
