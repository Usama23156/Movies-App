import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import {faFilm ,faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrollPosition, setscrollPosition] = useState();
  const [isVisible, setisVisible] = useState(true);
  const [open, setOpen] = useState(false);

useEffect(() => {
  const handelScroll = () => {
    
    const currentScrollState = window.scrollY;
    if (currentScrollState > scrollPosition && currentScrollState > 50){
      setisVisible(false)
    }else{
      setisVisible(true)
    }
    setscrollPosition(currentScrollState);
  };
  window.addEventListener('scroll' , handelScroll)
  return ()=>{
    window.removeEventListener('scroll' , handelScroll)
  } 
  }, [scrollPosition]);

  return (<>
  <nav className={`fixed w-full flex justify-between items-center z-[1000] transition-[0.5s] px-6 lg:px-[100px] py-3 md:py-5 right-0 top-0 ${scrollPosition > 50?'bg-[color:var(--bg-color)]':'bg-neutral-100/0'}`}>
     <Link to="/" className={`text-[1.1rem] font-semibold text-[color:var(--bg-color)] flex items-center gap-x-2 ${scrollPosition > 50?'text-[color:var(--text-color)]':'text-[color:var(--bg-color)]'}`}>
     <FontAwesomeIcon className='text-2xl text-[color:var(--main-color)]' icon={faFilm}/>
      Movies </Link>
      <div onClick={() => setOpen(!open)} className={`icon md:hidden  cursor-pointer  text-[color:var(--bg-color)] text-2xl  z-[100001] flex  flex-wrap md:flex-nowrap justify-between items-center ${scrollPosition > 50?'text-[color:var(--text-color)]':'text-[color:var(--bg-color)]'}`}>
      <FontAwesomeIcon icon={faBars} />
      </div>
      <div
            className={` ${
              open ? "flex bg-[color:var(--bg-color)] absolute md:relative top-16 left-0 w-full h-auto " : "hidden"
            } md:flex flex-col md:flex-row  items-center md:justify-center  `}
            >
        <ul className='flex flex-col md:flex-row md:text-center justify-center items-center md:space-x-0 gap-x-20 gap-y-5 py-5 '>       
          <li className="relative"><Link to="Home" smooth={true} duration={100}><NavLink onClick={() => setOpen(false)} className={`font-medium text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)]':'md:text-[color:var(--main-color)]'}`} to='Home'>Home</NavLink></Link> </li>
          <li className="relative"><Link to="Movies" smooth={true} duration={100}><NavLink onClick={() => setOpen(false)} className={`font-medium text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)]':'md:text-[color:var(--main-color)]'}`} to="Movies">Movies</NavLink></Link> </li>
          <li className="relative"><Link to="ComingSoon" smooth={true} duration={100}><NavLink onClick={() => setOpen(false)} className={`font-medium text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)]':'md:text-[color:var(--main-color)]'}`} to="ComingSoon">Coming Soon</NavLink></Link> </li>
          <li className="relative"><Link to="NewsLetter" smooth={true} duration={100}><NavLink onClick={() => setOpen(false)} className={`font-medium text-base md:text-[color:var(--main-color)] text-[color:var(--text-color)] ${scrollPosition > 50?'md:text-[color:var(--text-color)]':'md:text-[color:var(--main-color)]'}`} to="NewsLetter">News Letter</NavLink></Link> </li>
        </ul>
            </div>
          <button className='hover:bg-[#fa1216] bg-[color:var(--main-color)] text-[color:var(--bg-color)] font-normal px-[1.4rem] py-[0.7rem] flex rounded-lg lg:px-[1.2rem] lg:py-[0.6rem]'>
              SignIn
          </button>
  </nav>
  </>
  )
}