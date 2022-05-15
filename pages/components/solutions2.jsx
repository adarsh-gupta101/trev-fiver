import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import prie from "../../public/assets/preview.png";
console.log(prie);
function Solutions2() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".itsol"),
      {
        x: -25,
        // scaleX:0.8
      },
      {
        x: 25,
        // scaleX:1,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          scrub: true,
        },
      }
    );
  });
  return (
    <div ref={ref} className='flex flex-col md:flex-row-reverse  z-0 my-6'>
      <div>
        {" "}
        <span className='md:text-8xl  z-1 top-0 md:relative text-center h-full flex items-center text-white'>
          <p className='font-bold hidden md:block itsol text-black'>          SOFTWARE DEVELOPMENT
</p>
        </span>
      </div>
      <>
        <p className='  md:hidden mt-32 bg-gray-0 w-full text-center flex items-center justify-center text-5xl font-bold text-[#e4e71c] h-60 absolute z-40 '>
          SOFTWARE DEVELOPMENT
        </p>

        {/* <img
          alt=''
          src={prie.src}
          style={{ height: "99vh", objectFit: "fill" }}
          className='-z-1 relative '
        /> */}
         <img
          alt=''
          src="https://images.unsplash.com/photo-1603025832572-c5ba1fb6be8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
          style={{ height: "99vh", objectFit: "fill" }}
          className='-z-1 relative '
        />

      </>{" "}
    </div>
  );
}

export default Solutions2;
