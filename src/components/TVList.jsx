import React, { useState, useEffect } from 'react'
import axios from "../api/axios"
import MovieCard from './MovieCard';


function TVList() {
    const [movies,setMovies] = useState([]);
    const [selectedType,setSelectedType] = useState('popular')
    const API_KEY = "da18bcc962a30b615ed38969455bbbcb";

    useEffect(() => {
        const fetchMovies = async () => {
        const request = await axios.get(`/tv/${selectedType}?api_key=${API_KEY}&language=vi-VN&page=1`)
        setMovies(request.data.results)
        }
        fetchMovies()
    },[selectedType]) 
    
  return (
    <div className='max-w-7xl w-full px-4 mx-auto'>
      <div className='w-full flex justify-end mb-4'>
        <div className='flex flex-row'>
            <div className={`${selectedType=== 'popular' && 'bg-red-600'} p-2 cursor-pointer`} onClick={() => setSelectedType('popular')}>Popular</div >
            <div className={`${selectedType=== 'top_rated' && 'bg-red-600'} p-2 cursor-pointer`} onClick={() => setSelectedType('top_rated')}>TopRated</div > 
        </div>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
            {movies.map((movie) => {
            return (
                <MovieCard key={movie.id} movie={movie} media_type={`tv`} />
            )
            })}
        </div>
    </div>
  )
}

export default TVList
