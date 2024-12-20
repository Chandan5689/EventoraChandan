import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' h-32 bg-gray-500'>
        <div className='flex justify-around pt-6'>
            <a href="https://github.com/"><img src="" alt="Github" /></a>
            <a href='https://x.com/?lang=en'><img src="" alt="Twitter" /></a>
            <a href="https://www.linkedin.com"><img src="" alt="LinkedIn" /></a>
        </div>

        <div>
           <ul  className='flex pt-6 justify-around '>
            <li><Link to='/aboutus'>About</Link></li>
            <li><Link to='/'>© Eventora</Link></li>
            <li> <Link to=''>Contact</Link></li>
           </ul>
        </div>
    </div>
  )
}

export default Footer