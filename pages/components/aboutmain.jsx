import React from "react";
import logo from "./img/logo trend.png";
import Header from "./header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {  FaHourglassStart } from 'react-icons/fa';
import   {AiFillSecurityScan,AiOutlineLaptop}  from 'react-icons/ai';
import { BsFillPeopleFill } from "react-icons/bs";
import { GrCloudSoftware } from "react-icons/gr";
import { BiMobileAlt } from "react-icons/bi";
import { GrPersonalComputer } from "react-icons/gr";
import { GrLaunch } from "react-icons/gr";
import Usersowner from "./utils/usersowner";
import Footer from "./footer";
import Link from "next/link";





function Aboutmain() {
  console.log(logo);
  return (
    <div >
      <Header />
      <div className='flex-col md:flex-row-reverse p-2 bg-gray-50'>
        <img 
          src='/assets/poster.jpg'
          className='w-2/3 h-2/3 m-auto '
          alt='poster'></img>

        <div className='p-8  '>
          <p className='text-4xl font-bold text-center'>LEARN ABOUT US</p>
          <p className='text-2xl py-8'>
            Empowered with rich technical expertise, Trendonline Digital stand
            as one of the young dynamic Software development companies in Harare
            for over 5 years now. Surpassing client’s expectations with
            qualitative and timely deliverables, our development team has
            transformed businesses by building apps that are competent, agile
            and high-performant. Our technical prowess and domain proficiency
            allow businesses to meet custom business needs with the capability
            of our diversified and resourceful professionals.
          </p>

          <p className='text-2xl py-8'>
            The Trendonline Digital designed branding and UX/UI that impacted
            growth of financing platforms, educational services, and even a
            neo-bank
          </p>
          <Link href="/portfolio">
           <p  className='bg-yellow-700 text-center w-fit p-4 rounded shadow-2xl text-white'> Learn More</p>
          </Link>
        </div>
      </div>

      <p className="text-4xl text-center mt-4">OUR STORY</p>
      <p className="text-3xl text-center p-4" >
        Our talent remains approachable and ready to lend a hand because it’s
        the right thing to do hence our documeneted progress over the years
      </p>
      <VerticalTimeline lineColor="gray">
      <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaHourglassStart />}
    date="Now"
  />
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="16 Jan 2021

    "

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillSecurityScan />}
  >
    <h3 className="vertical-timeline-element-title"> </h3>
    <h4 className="vertical-timeline-element-subtitle text-xl font-bold"> Launch of our web security Division</h4>
    <p>

   
Proud to offer this service to our clients    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="01 Jan 2022

    "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiOutlineLaptop />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle text-xl font-bold">150 projects completed</h4>
    <p>
    We reached this milestone in our journey

</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="01 Dec 2020

    "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsFillPeopleFill />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle">
Our workforce expands</h4>
    <p>
    Joined by young and progressive developers

</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="01 Sep 2019

    "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrCloudSoftware />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle text-xl font-bold">1st Custom made software is deployed
</h4>
    <p>
    The first custom made software is handed over to a happy client

</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01 Jun 2019

    "
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<BiMobileAlt />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle text-xl font-bold">1st Mobile Application is Launched
</h4>
    <p>
    The 1st mobile application for a client goes live on Google and Apple stores

</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01 Mar 2018

    "
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GrPersonalComputer />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle text-xl font-bold">Launched our 1st Website
</h4>
    <p>
    Full responsive website goes live for one of our 1st clients

</p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
   <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrLaunch />}
    date="Launch"
  >
          <h3 className="vertical-timeline-element-title font-bold text-3xl">Launched our company on 06 Sept 2017
</h3>
<h3 className="vertical-timeline-element-title">    <h3 className="vertical-timeline-element-title">Trendonline is incooperated as a Private Limited Company

</h3>
</h3>


      </VerticalTimelineElement>
  
</VerticalTimeline>

<p className="text-center   text-3xl p-4 mt-16  font-bold">OUR TEAM</p>
<p className="text-center  text-3xl">Augment your capabilities with on-demand IT Team that offers products and services with zero liabilities.</p>
<div className="flex">
{/* <div className="bg-white w-fit   p-4 m-4 shadow-2xl hover:shadow">
<img src="/assets/trevor.jpeg" alt="" className="rounded-full"/>
<p className="text-center  text-2xl m-2">Trevor Jaera</p>
<p className="text-center">Founder and Head Developer</p>
</div>
<div className="bg-white w-fit   p-4 m-4 shadow-2xl hover:shadow">

<img src="/assets/team-2.jpg" className="rounded-full" alt=""/>
<p className="text-center  text-2xl m-2">Trevor Jaera</p>
<p className="text-center">Founder and Head Developer</p>
</div>
<div className="bg-white w-fit   p-4 m-4 shadow-2xl hover:shadow">

<img src="/assets/team-3.jpg " className="rounded-full" alt=""/>
<p className="text-center  text-2xl m-2">Trevor Jaera</p>
<p className="text-center">Founder and Head Developer</p>
</div>
<div className="bg-white w-fit   p-4 m-4 shadow-2xl hover:shadow">


<img src="/assets/team-4.jpg" className="rounded-full" alt=""/>
<p className="text-center  text-2xl m-2">Trevor Jaera</p>
<p className="text-center">Founder and Head Developer</p>
</div> */}
<Usersowner/>
</div>

<Footer/>
    </div>
  );
}

export default Aboutmain;
