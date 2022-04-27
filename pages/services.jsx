import React from "react";
import Footer from "./components/footer";
import Headr from "./components/header";
import Link from "next/link";

const data = [
  {
    name: "WEB DESIGN AND DEVELOPMENT",
    desc: "We analyze your requirements and develop a visually rich web application. Our front-end development team reuses the components to offer you a component-driven architecture using React.js, Angular, and Vue.js frameworks. As a leading web app development agency in Harare, we are focused to provide interactive, appealing and secure front-end solutions",
    img: "/assets/s1.svg",
  },
  {
    name: "SOFTWARE AND MOBILE APPS DEVELOPMENT",
    desc: "We excel in the process of custom software development from grassroot level and assist businesses at each phase from designing, development, deployment to maintenance. Over the years, we have developed a knack for custom software solutions and with our strategic low-risk approach, we streamline business processes, functions and overall projects. Our team of proficient software developers are consistent in offering high-performing applications with standard QA practices and aligned business requirements.",
    img: "/assets/s2.svg",
  },
  {
    name: "WEB SECURITY",
    desc: "With cyber threats more prevalent than ever before ,a robust security solution is essential for every business. We offer a number of services and solutions designed to protect your data and endpoints.",
    img: "/assets/s3.svg",
  },
  {
    name: "ECOMMERCE DEVELOPMENT",
    desc: "Optimize business to develop on-demand e-commerce applications that add mobility to your business with streamlined retail processes and operations. We endeavor in offering flexible and resilient ecommerce application development services tailored to unique business requirements with a personalized user experience.",
    img: "/assets/s4.svg",
  },
];

function Services() {
  return (
    <div className='bg-gray-50'>
      <Headr />
      <p className='text-5xl font-bold text-center p-6'>OUR SERVICES</p>
      <p className='text-2xl pt-8 text-center font-medium'>WHAT WE DO?</p>
      <p className='text-xl px-8 py-8 text-center'>
        Capitalize on our technical expertise to deliver software solutions from
        startups to enterprise companies. We have more than 5 years of
        experience in providing web application development services to industry{" "}
      </p>
      {data.map((datas, index) => {
        return (
          <div
            className='flex  flex-col-reverse md:flex-row items-center shadow rounded p-8 bg-white m-8'
            key={index}>
            <div>
              <p className='text-4xl  font-semibold pb-2'> {datas.name}</p>
              <p className='text-gray-500 '>{datas.desc}</p>
              <Link href='/contact'>
                <p className='text-white bg-yellow-500 font-bold w-fit p-2 my-4 shadow'>
                  Contact Us
                </p>
              </Link>
            </div>
            <img
              src={datas.img}
              className=' md:w-1/3 md:h-1/3 m-auto'
              alt='img'></img>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Services;
