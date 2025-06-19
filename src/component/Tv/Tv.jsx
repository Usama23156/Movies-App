import React,{useEffect } from "react";
import { Element } from "react-scroll";
import { useDispatch } from "react-redux";
import { addTv } from "../../lib/tvSlice";
import moviesApi from "../../apis/moviesApi";
import TvList from "../tv list/TvList"
import TV from "../../assets/img/home2.jpg"
import NewsLetter from "../newsletter/NewsLetter";

export default function Tv () {
   let dispatch = useDispatch();

useEffect(() => {
  let fetchTv= async() =>{
    let response = await moviesApi.get('discover/tv?api_key=5bc2caccd84bb20f90b48fa3d972542a');
    
    dispatch(addTv(response.data.results));
  }
  fetchTv();
},[]);
    return (
    <>
    <Element name="Tv">
      <div className=" w-full min-h-screen bg-center bg-cover relative" style={{backgroundImage:`url(${TV})`}}></div>
    <section id="Tv" className="tv px-[1.5rem] py-[4.5rem]" >
    <h2 className="font-medium text-[1.2rem] uppercase border-b-[color:var(--main-color)] max-w-[1000px] mx-auto border-b border-solid">Opening this Week</h2>
     <div className=" row flex flex-col mb-10 ">
    <TvList/>
</div>
</section>
<NewsLetter/>
</Element>
</>
    )}