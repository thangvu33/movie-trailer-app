import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'

function getPosterPath(backdrop_path) {
  return `https://image.tmdb.org/t/p/original${backdrop_path}`;
}
function Banner({ fetchURL }) {
  const [movies, setMovies] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({slidesToScroll: 'auto'})
  
  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div ref={emblaRef} className='h-[600px] lg:h-screen overflow-x-hidden'>
      <div className='h-full w-full flex flex-row'>
        {movies.map((movie) => (
          <div
            className='shrink-0 grow-0 basis-full min-w-0 bg-no-repeat bg-bottom bg-cover flex p-8 lg:p-20 xl:p-40 '
            style={{ backgroundImage: `url('${getPosterPath(movie.backdrop_path)}')` , boxShadow: '100px -100px 200px black inset'}}
            key={movie.id}
          > 
            <div className='flex flex-col justify-center basis-full md:basis-1/2'>
              <h1 className='font-bold'>{movie.title || movie.name}</h1>
              <Link to={`/${movie.media_type}/${movie.id}`} className='py-10'>
                <button className='bg-red-600 hover:bg-red-700 py-2 px-6 rounded-md flex justify-center items-center'>Wacth Now</button>
              </Link>
              <p className='xl:text-xl'>{movie.overview.slice(0,200) + '...'}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;

