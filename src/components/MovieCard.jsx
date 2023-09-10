import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {BsPlayFill} from 'react-icons/bs'
function getPosterPath(poster_path) {
  return `https://www.themoviedb.org/t/p/original${poster_path}`
}

function MovieCard({ media_type, movie }) {
  const [showInfo, setShowInfo] =useState(false)
  
  return (
    
      <Link to={`/${media_type}/${movie.id}`} className='shrink-0 grow-0 basis-1/2 min-w-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
          <div className='relative'>
            {showInfo && 
              <div className='absolute top-0 left-0 bottom-0 right-0 w-full bg-gradient-to-t from-black flex flex-col-reverse '>
                <div className='h-1/2 flex flex-col items-center justify-between'>
                  <div className='bg-red-500 rounded-md px-6 py-2 -translate-y-1/2 '><BsPlayFill size={30} style={{color: 'white'}}/></div>
                  <p className='font-semibold'>{movie.title || movie.name}</p>
                </div>

              </div>}
            <img src={getPosterPath(movie.poster_path)} alt={movie.title} className='w-full h-full object-fill' />
          </div>
      </Link>
    
  )
}

export default MovieCard;
