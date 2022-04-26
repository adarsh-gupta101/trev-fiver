import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link'
 
function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
    <nav className='flex justify-between md:justify-evenly items-center h-24 p-2 sticky top-0 bg-white z-50' style={{fontFamily:"poppins"}}>
        <ul className='hidden md:flex w-3/4  justify-evenly items-center'>
          <li><Link href="/"><img src="/assets/img/logo trend.png" className='w-28 object-contain '></img></Link></li>
        <li><Link href="/ITS">IT Solutions</Link></li>
        <li><Link href="/Humans">Software Development</Link></li>
        <li><Link href="/components/aboutmain">About Us</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        {/* <li> Careers </li> */}
        </ul>
    
        <Link href="/"><img src="/assets/img/logo trend.png" className=' md:hidden w-20 object-contain '></img></Link>

        <p  className="text-yellow-300"><Link href="/">TrendsOnline Digital</Link></p>
        <div className='flex flex-col justify-evenly items-center md:hidden'>
        <Hamburger className="md:hidden" toggled={isOpen} toggle={setOpen} />
        </div>
      

    </nav>
    {isOpen?
    <ul className=' md:flex w-full  justify-evenly absolute z-50'>
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/ITS">IT Solutions</Link></li>
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/Humans">Software Development</Link></li>
         {/* <li className='p-4 text-center font-semibold border-y bg-white'>Industries</li> */}
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/components/aboutmain">About Us</Link></li>
         <li className='p-4 text-center font-semibold border-y bg-white'><Link href="/portfolio">Portfolio</Link></li>
         {/* <li className='p-4 text-center font-semibold border-y bg-white'> Careers </li> */}
        </ul>:null}
    </div>
  )
}

export default Header