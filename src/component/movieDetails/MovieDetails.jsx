
import React,{useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function MovieDetails() {
    let {id} = useParams();
    const [movie, setmovie] = useState(null)
    let MovieDetailsURL =  `https://api.themoviedb.org/3/movie/${id}?api_key=5bc2caccd84bb20f90b48fa3d972542a`;

useEffect(() => {
  fetch(MovieDetailsURL)
  .then(res => res.json() )
  .then(json => setmovie(json))
},[id]);
  return (
   
        
        <div className="md:flex gap-20 px-[1.5rem] py-[4.5rem] justify-center items-center mt-10">
                <div>
              <img src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`} className='self-center w-96 h-96 rounded-md' alt='movie pic'/>
            </div>
            <div className=' w-96 mt-5 '>
              <span className="font-bold text-[color:var(--main-color)]">Title</span>
              <p className="mb-3">{movie?.title}</p>
              <span className="font-bold text-[color:var(--main-color)]">Language</span> 
              <p className="mb-3">{movie?.original_language}</p>
              <span className="font-bold text-[color:var(--main-color)]">Vote</span> 
              <p className="mb-3">{movie?.vote_average}</p>
              <span className="font-bold text-[color:var(--main-color)]">Over View</span>
              <p>{movie?.overview}</p>
           
            </div> 
            </div>
        
    
  )
}
