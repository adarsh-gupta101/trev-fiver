import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className=''>
      <Header />
      <p className='text-5xl text-bold text-center mt-16'> CONTACT US</p>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='bg-white flex flex-col items-center w-64 text-xl text-center p-4  m-12'>
          <img src='/assets/img/contacts.jpeg' alt='' />
          <p>Trevor Jaera</p>
          <a
            href='mailto:info@trendonline.co.zw
'
            className='flex items-center justify-evenly'>
            {" "}
            <HiOutlineMail></HiOutlineMail>Email Now
          </a>
        </div>{" "}
        <div className='bg-white flex flex-col items-center w-64 text-xl text-center p-4  m-12'>
          <img src='/assets/img/contacts r.png' alt='' />
          <p>INFORMATION DESK</p>
          <a
            href='mailto:info@trendonline.co.zw
'
            className='flex items-center justify-evenly'>
            {" "}
            <HiOutlineMail></HiOutlineMail>Email Now
          </a>
        </div>
        <div className='bg-white flex flex-col items-center w-64 text-xl text-center p-4  m-12'>
          <img src='/assets/img/contacts r.png' alt='' />
          <p>SUPPORT TEAM</p>
          <a
            href='mailto:info@trendonline.co.zw
'
            className='flex items-center justify-evenly'>
            {" "}
            <HiOutlineMail></HiOutlineMail>Email Now
          </a>
        </div>
      </div>

      <p className='text-center text-3xl font-bold mt-16'>HOW TO REACH US</p>
      <p className='text-center text-xl'>
        Please send your requirements and we&apos;ll get back to you at the
        earliest.
      </p>
      <p className='text-center p-2 text-xl  w-fit flex justify-center items-center m-auto'>
        <AiOutlineMobile className='text-2xl ' /> +263773477646
      </p>
      <p className='text-center p-2 text-xl  w-fit flex justify-center items-center m-auto'>
<MdEmail className='text-2xl ' /> info@trendonline.co.zw</p>
      <p className='text-center p-2 text-xl mb-16 w-fit flex justify-center items-center m-auto'>
        <GoLocation className='text-2xl' />
        14 ARGYLE ROAD , AVONDALE, HARARE, ZIMBABWE
      </p>

      <Footer />
    </div>
  );
}

export default Contact;
