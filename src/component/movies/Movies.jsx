import React,{useEffect } from "react";
import { Element } from "react-scroll";
import { useDispatch } from "react-redux";
import { addMovies } from "../../lib/moviesSlice";
import moviesApi from "../../apis/moviesApi";
import MovieList from "../movie list/MovieList";
import MOVIES from "../../assets/img/home1.jpg"
import NewsLetter from "../newsletter/NewsLetter";


export default function Movies () {
   let dispatch = useDispatch();

useEffect(() => {
  let fetchMovies= async() =>{
    let response = await moviesApi.get('discover/movie?api_key=5bc2caccd84bb20f90b48fa3d972542a');
    
    dispatch(addMovies(response.data.results));
  }
  fetchMovies();
},[]);
    return (
    <>
    <Element name="Movies">
      <div className=" w-full min-h-screen bg-center bg-cover relative" style={{backgroundImage:`url(${MOVIES})`}}></div>
    <section id="Movies" className="movies px-[1.5rem] py-[4.5rem]">
    <h2 className="font-medium text-[1.2rem] uppercase border-b-[color:var(--main-color)] max-w-[1000px] mx-auto border-b border-solid">Opening this Week</h2>
     <div className=" row flex flex-col mb-10 ">
    <MovieList/>
</div>
</section>
<NewsLetter/>
</Element>
</>
    )}
