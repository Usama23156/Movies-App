import React from "react";
import m1 from "../../assets/img/m1.jpg";
import m2 from "../../assets/img/m2.jpg";
import m3 from "../../assets/img/m3.jpg";
import m4 from "../../assets/img/m4.jpg";
import m5 from "../../assets/img/m5.jpg";
import m6 from "../../assets/img/m6.jpg";
import m7 from "../../assets/img/m7.jpg";
import m8 from "../../assets/img/m8.jpg";
import m9 from "../../assets/img/m9.jpg";
import m10 from "../../assets/img/m10.jpg";
import { Element } from "react-scroll";

export default function Movies () {
    return (
    <>
    <Element name="Movies">
<section id="Movies" className="movies px-[1.5rem] py-[4.5rem]">
<h2 className="font-medium text-[1.2rem] uppercase border-b-[color:var(--main-color)] max-w-[1000px] mx-auto border-b border-solid">Opening this Week</h2>
<div className=" row flex flex-col mb-10 ">
<div className="max-w-[1000px] ml-auto mr-auto gap-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">

  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear " src={m1}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Venom</h3>
    <span className="text-[13px]">120min | Action</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
      <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear"  src={m2}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Dunkerk</h3>
    <span  className="text-[13px]">105min | Adventure</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m3}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Batman & Superman</h3>
    <span className="text-[13px]">100min | Thriller</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m4}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">John Wick</h3>
    <span className="text-[13px]">120min | Adventure</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m5}/>    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Aquaman</h3>
    <span className="text-[13px]">130min | Action</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m6}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Black Panther</h3>
    <span className="text-[13px]">90min | Thriller</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60  w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m7}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Thor</h3>
    <span className="text-[13px]">130min | Action</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m8}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Bumblebee</h3>
    <span className="text-[13px]">100min | Thriller</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m9}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">Mortal Engines</h3>
    <span className="text-[13px]">100min | Action</span>
  </div>
  <div className="box">
    <div className="box-img w-full h-[270px]">
    <img className=" sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear" src={m10}/>
    </div>
    <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">UnderWorld Blood Wars</h3>
    <span className="text-[13px]">100min | Action</span>
  </div>
</div>
</div>
</section>
</Element>
</>
    )}
