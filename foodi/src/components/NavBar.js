import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb';
import {FaGoogleWallet} from 'react-icons/fa';
import {MdOutlineFavorite} from 'react-icons/md'


const NavBar = () => {
  const [sideNav, setSideNav] = useState(false)
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>Desi
              <span className='text-red-700'>Dish</span>
            </h1>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none'
              type='text'
              placeholder='Search'
            />
        </div>
        <button className='bg-red-700 text-white border-green hidden md:flex items-center py-2 rounded-full'>
          <BsFillCartFill size={20} p-1/>Cart
        </button>
        {/* comdition on overlay */}
        {
          sideNav ? (
            <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left 0'></div>
          ): ("")
        }

        <div className={
        sideNav 
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'
        }
        ><AiOutlineClose size={25} 
        onClick={() => setSideNav(!sideNav)} className='absolute right-4 top-4 cursor-pointer'/>

        <h2 className='text-2xl p-4 font-semibold'>Desi 
        <span className='text-red-700 font-semibold'>Dish</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-900'>
              <li className=' py-4 text-xl flex'>
                <BsPerson size={25} className='mr-4'/>  Profile
              </li>
              <li className='py-4 text-xl flex'>
                <TbTruckReturn size={25} className='mr-4'/>  Delivery
              </li>
              <li className='py-4 text-xl flex'>
                <MdOutlineFavorite size={25} className='mr-4'/>  WishList
              </li>
              <li className='py-4 text-xl flex'>
                <FaGoogleWallet size={25} className='mr-4'/>  DesiWallet
              </li>
            </ul>
          </nav>
          </div>        
      </div>
  )
}

export default NavBar