import React from 'react'
import coming1 from "../../assets/img/coming1.jpg";
import coming2 from "../../assets/img/coming2.jpg";
import coming3 from "../../assets/img/coming3.jpg";
import coming4 from "../../assets/img/coming4.jpg";
import coming5 from "../../assets/img/coming5.jpg";
import coming6 from "../../assets/img/coming6.jpeg";
import coming7 from "../../assets/img/coming7.jpg";
import coming8 from "../../assets/img/coming8.jpg";
import coming9 from "../../assets/img/coming9.jpg";
import coming10 from "../../assets/img/coming10.jpg";import { Element } from "react-scroll";

export default function ComingSoon() {
  return (
    <>
      <Element name="ComingSoon">
    <section id="ComingSoon" className="coming px-[1.5rem] py-[4.5rem]">
      <h2 className="font-medium text-[1.2rem] uppercase border-b-[color:var(--main-color)] max-w-[1000px] mx-auto border-b border-solid">Coming Soon</h2>
    <div className="row flex flex-col mt-10 mb-10  ">
    <div className='max-w-[1000px] ml-auto mr-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
      
        <div className="box">
          <div className="box-img w-full h-[270px]">
            <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming1}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Joney English</h3>
          <span className="text-[13px]">80min | Comedy</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming2}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">WarCrafet</h3>
          <span className="text-[13px]">120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming3}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Rampage</h3>
          <span className="text-[13px]">108min | Adventure</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming4}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Airon Lady</h3>
          <span className="text-[13px]">120min | Comedy</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming5}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Justice League</h3>
          <span className="text-[13px]">120min | Adventure</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming6}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Doctor Strange</h3>
          <span className="text-[13px]">120min | Adventure</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming7}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Captain Marvel</h3>
          <span className="text-[13px]">120min | Adventure</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming8}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Black Widow</h3>
          <span className="text-[13px]">90min | Action</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming9}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Ant Man</h3>
          <span className="text-[13px]">110min | Adventure</span>
        </div>
        <div className="box">
          <div className="box-img w-full h-[270px]">
          <img className="hover:-translate-y-2.5 sm:h-60 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={coming10}/>
          </div>
          <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Guardiance Of The Galaxy</h3>
          <span className="text-[13px]">120min | Adventure</span>
        </div>
    </div>
      </div>
    </section>
    </Element>
    </>
  )
}
