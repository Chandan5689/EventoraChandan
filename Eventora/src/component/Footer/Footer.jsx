import React from 'react'
import 'App.css'

function Footer() {
  return (
    <div className=' h-32 bg-gray-500'>
        <div className='flex justify-around pt-6'>
            <img src="" alt="Github" />
            <img src="" alt="Twitter" />
            <img src="" alt="LinkedIn" />
        </div>

        <div>
           <ul  className='flex pt-6 justify-around '>
            <li>About</li>
            <li>© Eventora</li>
            <li> Contact</li>
           </ul>
        </div>
    </div>
  )
}

export default Footer