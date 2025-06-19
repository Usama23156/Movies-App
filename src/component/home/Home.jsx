import React from 'react'
import { Link } from 'react-router-dom'
import HOME from '../../assets/img/home3.jpg'
import { Element } from "react-scroll";
import ComingSoon from "../coming soon/ComingSoon"
import NewsLetter from '../newsletter/NewsLetter'



export default function Home() {
  return (<>
  <Element name="Home">
    <section id="Home" className="px-[1.5rem] py-[4.5rem] w-full min-h-screen bg-center bg-cover relative" style={{backgroundImage:`url(${HOME})`}}>
      <div className="home-text absolute pl-20 top-[40%]">
        <span className="font-medium text-black uppercase">Marvel Universe</span>
        <h2 className="text-[color:var(--bg-color)] text-[2.5rem] md:text-[4rem] font-bold">
          Spider-Man</h2>
          <h2 className="text-[color:var(--bg-color)] text-[2.5rem] md:text-[4rem] font-bold mb-4">Far From Home
        </h2>
        <Link to="#" className="hover:bg-[#fa1216] bg-[color:var(--main-color)] text-[color:var(--bg-color)] font-normal px-[1.4rem] py-[0.7rem] rounded-lg">Book Now</Link>
      </div>
    </section>
    <ComingSoon/>
    <NewsLetter/>
    </Element>
  </>
  )
}
