import React from "react";
import {AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsPinterest}  from "react-icons/bs"
import {ImYoutube}  from "react-icons/im"





const users=[
    {
        name:"Trevor Jaera",
        position:"Founder and Head Developer",
        image:"/assets/trevor.jpeg " 
    },  {
        name:"Nunurai Makaza",
        position:"Business development Manager",
        image:"/assets/team-2.jpg " 
    },  {
        name:"Trevor Jaera",
        position:"Founder and Head Developer",
        image:"/assets/team-3.jpg " 
    },  {
        name:"Devin Jaera",
        position:"Full Stack Developer",
        image:"/assets/team-4.jpg " 
    },

]

function Usersowner() {
  return (
      <div className="flex flex-wrap justify-center items-center pb-16">
      {users.map((user,i)=>(
        <div key={i} className='bg-white w-fit   p-4 m-4 shadow-2xl hover:shadow'>
        <img src={user.image}className='rounded-full' alt='' />
        <p className='text-center  text-2xl m-2'>{user.name} </p>
        <p className='text-center'>{user.position}</p>

        <div
          className=' items-center justify-between md:m-2 flex md:flex md:mt-4'
>          <a href='https://instagram.com/magesstudio'>
           
           <AiOutlineInstagram className="w-12 h-12 "/>
          </a>
          <a href='https://www.behance.net/Mages'>
            {" "}
           <FiTwitter className="w-12 h-12 "/>
          </a>
          <a href='https://www.linkedin.com/company/magesstudio'>
            {/* <img
              alt=''
              src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png'
              className='w-10 h-10  sociallogo2 '
            /> */}
         <AiOutlineLinkedin className="w-12 h-12 "/>
          </a>

          <div className=''>
            <a href='https://magesstudio.medium.com/'>
              {/* <img
                alt=''
                src=' https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png'
                class
                Name='w-10'
            <  /> */}
             <ImYoutube className="w-12 h-12 "/>
             </a>
          </div>
        </div>
        </div>
      ))}
      </div>

  )}
 
 
export default Usersowner;
