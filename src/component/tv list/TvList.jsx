import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTv } from '../../lib/tvSlice';
import SingleTv from "../single tv/SingleTv"


export default function TvList() {
  let tv= useSelector(getAllTv);
  return (
    <>
        
        <div className="max-w-[1000px] ml-auto mr-auto gap-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {tv && tv.length && tv.map((TV) => 
        <SingleTv key={TV.id} data={TV}/>
    )}
    </div>
    
        </>
  )
}