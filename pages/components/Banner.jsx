import React, { useEffect, useRef } from "react";
import Image from "next/image";
import header1 from "../../public/assets/header1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const boxRef = useRef();
  const ptagref = useRef();

  useEffect(() => {
    const element = boxRef.current;

    gsap.fromTo(
      boxRef.current,
      { x: 30, y: 90 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          scrub:true
        },
      }
    );
    gsap.fromTo(
      ptagref.current,
      { x: -30, y: -90 },
      {
        x: 0,
        y: 150,
        scrollTrigger: {
          trigger: boxRef.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#svg",
      { y: 215, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      {
        scrub: true,
      }
    );
  });

  return (
    <div
      className=' w-full flex flex-col-reverse md:flex-row md:justify-center  md:items-center bg bg-[#f2f3f0]'
      style={{
        fontFamily: "poppins",
        background:"linear-gradient(220deg, rgb(255, 27, 107), rgb(91 182 255))"
        // background: "linear-gradient(309deg, #ff1b6b, #fff95b)",
      }}>
      <div className='flex-col  top-0    w-full'>
        <img
          alt=''
          src='/assets/homr.png'
          className='w-full h-full relative '></img>
        <img
          alt=''
          src='/assets/headerrectangle.png'
          id='svg'
          className='w-2/5 ml-8 hidden md:hidden h-90 absolute top-0 left-0 overflow-hidden '></img>
      </div>
      <div className='flex'>
        <h1
          className='text-5xl p-2 md:p-0  md:text-8xl md:w-2/3 font-bold txt-[#e3e634]  text-white'
          ref={boxRef}>
          WE&apos;RE SOFTWARE DEVELOPERS AND IT EXPERTS
        </h1>
        <p
          ref={ptagref}
          className='hidden md:block absolute h-fit w-64  right-0 bottom-0  text-white '>
          Everywhere in Zimbabwe,
          <span className='text-yellow-400'>TrendOnline</span> Digital makes IT
          accessible to free up businesses to change and improve their
          competitiveness.
        </p>
      </div>
    </div>
  );
}

export default Banner;
