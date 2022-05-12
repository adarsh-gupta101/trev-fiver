import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Solutions() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".itsol"),
      {
        rotate: 25,
      },
      {
        rotate: -25,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          scrub: true,
        },
      }
    );
  });

  return (
    <div
      ref={ref}
      className='flex flex-col md:justify-between md:flex-row  z-0'>
      <div>
        {" "}
        <span className='md:text-8xl  z-1 top-0 md:relative text-center h-full flex items-center '>
          <p className='itsol hidden md:block font-bold text-black '>
            OUR IT SOLUTIONS
          </p>
        </span>
      </div>
      <>
        <img
          src='https://images.unsplash.com/photo-1627281795834-64edf37de340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
          style={{ height: "99vh" }}
          className='-z-1 relative md:w-2/5 shadow-2xl brightness-50 md:brightness-100	'
        />
        <p className=' md:hidden bg-[#57400] mt-32   w-full text-center flex items-center justify-center   flex-wrap text-6xl xl:text-9xl font-bold text-[#e4e71c] h-64 absolute z-40 '>
          OUR IT SOLUTIONS
        </p>
      </>
    </div>
  );
}

export default Solutions;
