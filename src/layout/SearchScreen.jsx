import axios from 'axios'
import React, { useEffect, useState } from 'react'

import MovieCard from '../components/MovieCard'

function SearchScreen() {
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('')
  

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=da18bcc962a30b615ed38969455bbbcb&query=${query}&include_adult=false&language=en-US&page=1`, {
          cancelToken: source.token
        });
    
        setMovies(request.data.results);
        
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.log('Error', error.message);
        }
      }
    };
    
    fetchData();
    
    return () => {
      
      source.cancel('Component unmounted');
    };
    },[query])

  return (
    
    <div className='max-w-7xl mx-auto relative top-[100px] w-full px-4 min-h-screen'>
      <input
        className='w-full text-white bg-black p-2 border border-1 border-slate-400 hover:border-white hover:border-2 focus:border-2 focus:border-green-600 outline-0' 
        value={query}
        type="text" 
        onChange={e => setQuery(e.target.value)} />

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
           {movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} media_type={`movie`} />
            )
          })}
        </div>
    </div>
  )
}

export default SearchScreen
