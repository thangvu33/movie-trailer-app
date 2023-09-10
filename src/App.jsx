import Header from './components/Header'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import HomeScreen from './layout/HomeScreen'
import MovieDetail from './layout/MovieDetail'
import MovieScreen from './layout/MovieScreen'
import TVScreen from './layout/TVScreen'
import SearchScreen from './layout/SearchScreen'
import Footer from './components/Footer'


function App() {
  return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route index element={<HomeScreen />}></Route>
            <Route path=':types/:id' element={<MovieDetail />}></Route>
            <Route path='movie' element={<MovieScreen />}></Route>
            <Route path='tv' element={<TVScreen />}></Route>
            <Route path='search' element={<SearchScreen />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
