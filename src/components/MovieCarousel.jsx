import React from 'react';
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "../api/axios"
import useEmblaCarousel from 'embla-carousel-react'

function MovieCarousel({ media_type, title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({slidesToScroll: 'auto'})

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchMovies()
  },[])
  
  return (
        <div className="my-8 max-w-7xl mx-auto px-4">
          <h1 className="mb-4 text-2xl text-white font-bold">{title}</h1>
          <div ref={emblaRef} className='overflow-x-hidden'>
            <div className="flex">
              {movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    media_type={media_type}
                  />
                )
              }
              )}
            </div>
          </div>
        </div>
  )
}

export default MovieCarousel


