import React from 'react'
import profileImage from '../../assets/profile.png'

function Header() {
  return (
    <div className='flex h-32 w-screen justify-between pt-4 align-middle '>
        <h1 className='pl-4 text-2xl'>Eventora</h1>
        <div><input className='text-center border-black border-2 rounded-md w-80' type="text" name="" id="" placeholder='Search your events...'  /></div>
        <div>
            <ul className='flex w-96 justify-around'>
                <li>About Us</li>
                <li>Add Event</li>
            </ul>
        </div>
        <div className='mr-5'><img className='h-10' src={profileImage} alt="" /></div>
    </div>
  )
}

export default Header