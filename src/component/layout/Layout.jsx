import React from 'react'
import Home from '../home/Home'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Movies from '../movies/Movies'
import { BrowserRouter } from 'react-router-dom'
import ComingSoon from '../coming soon/ComingSoon'
import CopyRights from '../CopyRights/CopyRights'
import NewsLetter from '../newsletter/NewsLetter'
import { Outlet } from 'react-router-dom'





export default function Layout() {
  
  return (<>
  <BrowserRouter>
    <Navbar/>
    <Home/>
    <Movies/>
    <ComingSoon/>
    <NewsLetter/>
    <Footer/>
    <CopyRights/>
    </BrowserRouter>
  </>

  )
}
