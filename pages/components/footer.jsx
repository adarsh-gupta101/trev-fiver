import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsPinterest}  from "react-icons/bs"
import {ImYoutube}  from "react-icons/im"


function Footer() {
  return (
    <>
    <div className='bg-gray-800 text-white flex flex-col md:flex-row justify-between px-8 md:px-16 py-32'>
      <div className='text-4xl font-semibold '>
        <p>OUR INSIGHTS TO YOUR INBOX.</p>
        <p className='text-xl text-yellow-300 w-78 p-2'>
          <a
            href='mailto:info@trendonline.co.zw
'
            className='flex items-center justify-start text-yellow-300'>
            {" "}
            Email Now -  info@trendonline.co.zw
          </a>
        </p>
        <p className='text-xl w-78 p-2'>
          <a
            href='mailto:info@trendonline.co.zw
'
            className='flex items-center justify-start text-yellow-300'>
            {" "}
            Mobile - +263773477646
          </a>
        </p>
        <p className="text-xl w-78 p-2 text-yellow-300">
            ADDRESS - 14 ARGYLE ROAD , AVONDALE, HARARE, zIMBABWE
        </p>
        
        <div
          className=' items-center justify-between md:m-2 flex md:flex md:mt-4'
>          <a href='https://instagram.com/magesstudio'>
           
           <AiOutlineInstagram className="w-12 h-12 text-yellow-300 "/>
          </a>
          <a href='https://www.behance.net/Mages'>
            {" "}
           <FiTwitter className="w-12 h-12 text-yellow-300 "/>
          </a>
          <a href='https://www.linkedin.com/company/magesstudio'>
            {/* <img
              alt=''
              src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png'
              className='w-10 h-10  sociallogo2 '
            /> */}
         <AiOutlineLinkedin className="w-12 h-12 text-yellow-300 "/>
          </a>

          <div className=''>
            <a href='https://magesstudio.medium.com/'>
              {/* <img
                alt=''
                src=' https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png'
                class
                Name='w-10'
            <  /> */}
             <ImYoutube className="w-12 h-12 text-yellow-300 "/>
             </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-col flex-wrap  justify-evenly items-center'>
        <ul className='bg-red flex flex-col md:flex-row items-center mt-4'>
          <li className='text-yellow-300 p-2 md:mb-8'>
            <Link href='/ITS'><p>IT Solutions</p></Link>
          </li>
          <li className='text-yellow-300 p-2 md:mb-8'>
            <Link href='/Humans'><p>Software Development</p></Link>
          </li>
          <li className='text-yellow-300 p-2 md:mb-8'>
            <Link href='/components/aboutmain'><p>About Us</p></Link>
          </li>
          <li className='text-yellow-300 p-2 md:mb-8'>
            <Link href='/portfolio'><p>Portfolio</p></Link>
          </li>
        </ul>
        <span className='md:flex '>
          <div className='md:p-2'>
            <p className='font-semibold text-lg text-center mt-8 text-yellow-300'>
              Other Links
            </p>
            <p className='p-0 my-2  text-center'>Online Catalog</p>
            <p className='p-0 my-2  text-center'>My Account</p>
            <p className='p-0 my-2  text-center'> Contact</p>
            <p className='p-0 my-2  text-center'> Terms & Conditions</p>
          </div>

          <div className='md:p-2'>
            <p className='font-semibold text-lg text-yellow-300 text-center mt-8'>
              Solutions
            </p>
            <p className='p-0 my-2  text-center'>IT</p>
            <p className='p-0 my-2  text-center'>Software Development</p>
            <p className='p-0 my-2  text-center'> Web Design</p>
            <p className='p-0 my-2  text-center'> SEO</p>
          </div>
        </span>
      </div>
    </div>
    <p className='bg-gray-800 text-center text-white'>Developed With 💖 by TrendsOnline Digital</p>

    </>
  );
}

export default Footer;
