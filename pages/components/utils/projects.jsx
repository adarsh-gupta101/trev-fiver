import React from 'react'

const images=[{
    "img":"assets/img/portfolio-1.jpg",
    "text":"TECHADDICTS"
    },{
        "img":"assets/img/portfolio-2.jpg",
        "text":"B24 MOBILE APPLICATIONS"
        },{
            "img":"assets/img/portfolio-3.jpg",
            "text":"OPENSESAME OILS"
            },{
                "img":"assets/img/portfolio-4.jpg",
                "text":"OPENSESAME OILS"
                },]

function Projects() {
  return (
    <div className='flex m-2 flex-wrap justify-center'>
        {images.map((img,index)=>{
            return(
                <span className=' bg-white m-4 p-4 shadow-2xl hover:shadow-sm' key={index}>
                <img src={img.img} alt=""/>
                <p className='text-center m-auto text-2xl font-bold p-2'>{img.text}</p>
                </span>
            )
        })}
    </div>
  )
}

export default Projects