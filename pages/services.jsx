import React from "react";
import Footer from "./components/footer";
import Headr from "./components/header";
import Link from "next/link";
import FloatingWhatsApp from "react-floating-whatsapp";

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
  {
    name: "CLOUD COMPUTING",
    desc: " If you're confused by all this talk about Cloud computing let us cut through all the complexities for you. We can help you to understand and harness all the power and flexibility of Cloud and reap the many business benefits this innovation delivers.",
    img: "/assets/s5.svg",
    extra: [
      {
        name: "Cloud Solutions",
        desc: "You can count on our expert guidance in helping you determine your specific cloud requirements. Easy to work with and easily understood, our engineers speak your language: we take the time to explain every step so that you are always part of the process.",
        data: [
          {
            name: "Cost-effective & Secure",
            desc: "Migrating to the cloud has many cost and security advantages. Eliminate server and maintenance expense while ensuring your vital data is protected with the most up-to-date cyber security protocols available.",
          },
          {
            name: "End-to-End Support",
            desc: "Mustard IT provides set-up, maintenance and wrap-around support for all of your cloud needs. We can be as hands-on or as hands-off as needed – it’s all about the way you do business.",
          },
        ],
      },
      {
        name: "Cloud Emails",
        data: [
          {
            name: "Universal Access",
            desc: "Access your email from any location and any device with an internet connection. Empower your remote workers to accomplish more while staying on top of every communication.",
          },
          {
            name: "Guaranteed Business Continuity",
            desc: "Your information is stored in the cloud, so lost data from crashes, server or hardware failure are a thing of the past. Secure backups allow full restoration in case of any type of disaster, ensuring your uptime no matter what.",
          },
          {
            name: "Cost-effective & Scalable",
            desc: "Establish as many unique email accounts as you need at no extra cost. Subscription-based pricing structure provides a predictable monthly spend and can be scaled instantly when the need arises.",
          },
        ],
      },
      {
        name: "Cloud Storage",
        data: [
          {
            name: "Flexible & Secure            ",
            desc: "Cloud storage provides a flexible solution to accessing your files that will grow with your business. Secure backups facilitate business continuity and assure that your data is always available whenever and wherever you need it.",
          },
          {
            name: "Stay In Sync",
            desc: "No more time spent searching for the files you need. A central store of your documents in one single location helps manage master copies and allows you and your colleagues to access important information immediately via any device, from any location.",
          },
          {
            name: "Share & Collaborate",
            desc: "Manage and share documents with co-workers or clients no matter where in the world they are. Configure team sites to facilitate collaboration on projects, assigning tasks and managing access across the team",
          },
        ],
      },
    ],
  },
  {
    name: "IT INFRASTRUCTURE",
    desc: "TrendOnline Digital can help your business with all aspects of its IT infrastructure, from design and configuration to expanding",
    img: "/assets/s6.svg",
  },
  {
    name: "IT SUPPORT",
    desc: "Trendonline Digital provides IT support services throughout Zimbambwe and the SADC region, helping small to medium sized businesses get the most out of their IT systems.",
    img: "/assets/s7.svg",
  },
];

function Services() {
  return (
    <div
      className='bg-gray-50'
      style={{
        background:
          'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000")',
      }}>
      <Headr />
      <FloatingWhatsApp
        style={{ ZIndex: 10 }}
        phoneNumber={+263732774218}
        accountName='TrendOnlineDigital'
        avatar='/assets/img/logo trend.png'
      />
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
              <p className='text-gray-500 py-2 '>{datas.desc}</p>
              {datas.extra &&
                datas.extra?.map((result,index) => {
                  // console.log(result)
                  return (
                    <div className="my-4" key={index}>
                      <p className="font-bold text-2xl">{result.name}</p>
                      <p>{result.desc}</p>
                      {result.data && result.data.map((res,ind)=>{
                        return(
                          <div className="p-4" key={ind}>
                            <p className="font-semibold text-xl">{res.name}</p>
                      <p>{res.desc}</p>
                          </div>
                        )
                      })}
                    
                    </div>
                  );
                })}

              <Link href='/contact'>
                <p className='text-white cursor-pointer bg-yellow-500 font-bold w-fit p-2 my-4 shadow'>
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
