import React, { useState, useEffect } from "react";
import LightRays from "../Components/LightRays";
import Navbar from "../Components/Navbar";
import MovieCards from "../Components/MovieCards";
import Footer from "../Components/Footer";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=eb8c0a6dc407905aa5d140437c9de6db&language=en-US&page=1`
        );

        const data = await response.json();
        setMovieData(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <Navbar />
      <div className="flex flex-wrap justify-around h-auto mt-10 mx-40">
        {movieData.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
