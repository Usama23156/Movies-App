import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../lib/moviesSlice'
import SingleMovie from '../single movie/SingleMovie'


export default function MovieList() {
  let movies= useSelector(getAllMovies);
  return (
    <>
        
        <div className="max-w-[1000px] ml-auto mr-auto gap-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {movies && movies.length && movies.map((movie) => 
        <SingleMovie key={movie.id} data={movie}/> 
    )}
    </div>
    
        </>
  )
}
