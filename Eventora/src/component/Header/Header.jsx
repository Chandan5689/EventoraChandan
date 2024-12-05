import React from 'react'
import profileImage from '../../assets/profile.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex h-32 w-screen justify-between pt-4 align-middle '>
        <Link to='/'><h1 className='pl-4 text-2xl'>Eventora</h1></Link>
        <div><input className='text-center border-black border-2 rounded-md w-80' type="text" name="" id="" placeholder='Search your events...'  /></div>
        <div>
            <ul className='flex w-96 justify-around'>
                <li> <NavLink to='/aboutus' className={({isActive})=>`${isActive? "text-red-600" : "text-black"} hover:text-red-600`} > About Us </NavLink></li>
                <li><NavLink to='/addevent' className={({isActive})=> `${isActive? "text-red-600" : "text-black"} hover:text-red-600`}>Add Event</NavLink></li>
            </ul>
        </div>
        <div className='mr-5'><img className='h-10' src={profileImage} alt="" /></div>
    </div>
  )
}

export default Header