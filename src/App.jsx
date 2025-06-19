
import './App.css'
import { Provider } from 'react-redux'
import { store } from "./lib/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './component/movieDetails/MovieDetails'
// import LayOut from './component/layout/LayOut'
// import TvDetails from './component/tv details/TvDetails'
import Home from './component/home/Home'
import Movies from './component/movies/Movies'
import Tv from './component/Tv/Tv'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import CopyRights from './component/CopyRights/CopyRights'



function App() {

  return (
    <>
  <Provider store={store}>
    
  <BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path='Movies-App' element={<Home/>}/>
   <Route path='Home' element={<Home/>}/>
   <Route path='Movies/' element={<Movies/>}/>
   <Route path='Tv/' element={<Tv/>}/>
   <Route path='/movie/:id' element={<MovieDetails/>}/>
   {/* <Route path='/tv/:id' element={<TvDetails/>}/> */}
    </Routes>
    <Footer/>
    <CopyRights/>
    </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
