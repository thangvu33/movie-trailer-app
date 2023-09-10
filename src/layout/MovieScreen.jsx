import React, {useEffect} from 'react'
import requests from '../api/Request'
import Banner from '../components/Banner'
import MovieList from '../components/MovieList'

function MovieScreen() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <Banner fetchURL={requests.fetchTrendingMovie}/>
      <MovieList />
    </div>
  )
}

export default MovieScreen
