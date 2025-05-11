import React from 'react'
import { Element } from "react-scroll";


export default function NewsLetter() {
  return (
    <>
    <Element name="NewsLetter">
    <section id="NewsLetter" className="news max-w-[1000px] flex flex-col items-center justify-center gap-y-8 mx-auto px-[1.5rem] py-[4.5rem]">
     <h2 className='text-[1.8rem] font-semibold text-center'>
       Subscribe To Get <br />
       Newsletter
     </h2>
     <form className='flex items-center bg-[color:var(--bg-color)] p-2.5 rounded-lg'>
       <input className="email" type="email" placeholder="Enter Email..." />
       <input type="submit" value="Subscribe" className="hover:bg-[#fa1216] btncursor-pointer bg-[color:var(--main-color)] text-[color:var(--bg-color)] font-semibold uppercase px-[1.4rem] py-[0.7rem] rounded-lg border-0;
  outline: 0 " />
     </form>
   </section>
   </Element>
   </>
  )
}
