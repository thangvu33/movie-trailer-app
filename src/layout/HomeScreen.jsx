import React, {useEffect} from 'react'
import Banner from '../components/Banner'
import requests from '../api/Request'
import MovieCarousel from "../components/MovieCarousel.jsx"


function HomeScreen() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Banner fetchURL={requests.fetchTrendingAll}/>
      <MovieCarousel media_type='movie' title='POPULAR MOVIES' fetchURL={requests.fetchPopularMovies}/>
      <MovieCarousel media_type='tv' title='POPULAR TV' fetchURL={requests.fetchPopularTVs}/>
      <MovieCarousel media_type='movie' title="TOP RATED MOVIES" fetchURL={requests.fetchTopRatedMovies} />
      <MovieCarousel media_type='tv' title="TOP RATED TV" fetchURL={requests.fetchTopRatedTVs} />
    </>
  )
}

export default HomeScreen
