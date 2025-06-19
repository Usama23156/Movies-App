import React from 'react'
import { Link } from 'react-router-dom';

let IMGPATH = 'https://image.tmdb.org/t/p/w1280';
export default function SingleMovie(props) {
  let {data} = props;
  return (
    <>
    <Link to={`/movie/${data.id}`} key={data.id}>
    <div>
        <div className="box-img w-[190px] h-[270px]">
        <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear " src={IMGPATH + data.poster_path}/>
        </div>
        <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">{data.original_title}</h3>
        <span className="text-[13px]">{data.release_date }</span>
        </div>
      </Link>
    </>
  )
}
