import React, {useEffect} from 'react'
import requests from '../api/Request'
import Banner from '../components/Banner'
import TVList from '../components/TVList'
function TVScreen() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <Banner fetchURL={requests.fetchTrendingTv} />
      <TVList />
    </div>
  )
}

export default TVScreen
