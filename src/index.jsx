import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorDetailsPage from "./pages/actorDetailsPage";
import ActorsPage from "./pages/actorsPage";
import PlaylistsPage from "./pages/playlistsPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import ActorsContextProvider from "./contexts/actorsContext";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import AddMoviePage from './pages/addMoviePage'
import MyMoviesPage from './pages/myMoviesPage'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
          <ActorsContextProvider>
            <Routes>
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/playlists" element={<PlaylistsPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/actors/:id" element={<ActorDetailsPage/>} />
              <Route path="/movies/actors/" element={<ActorsPage />} />
              <Route path="/movies/favouriteactors/" element={<FavouriteActorsPage />} />
              <Route path="/movies/addmovie/" element={<AddMoviePage />} />
              <Route path="/movies/mymovie/" element={<MyMoviesPage />} />
              
            </Routes>
            </ActorsContextProvider>
        </MoviesContextProvider>
        





      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);