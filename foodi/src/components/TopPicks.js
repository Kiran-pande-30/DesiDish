import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const topPicks = [
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    }
]

const TopPicks = () => {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top sPicks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-=2'>

        <Splide options={{perPage: 4, gap: "0.5rem", drag: 'free', arrows: false}}>
        {
            topPicks.map((item)=>{
                return (
                    <SplideSlide>
                    <div className='rounded-3xl relative'>
                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                             <p className='px-2'> {item.title} </p>
                             <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl   cursor-pointer hover:scale-105 ease-out duration-300' 
                        src={item.img}/>
                    </div>
                    </SplideSlide>
                )
            })
        }
        </Splide>
    </div>
    </>
  )
}

export default TopPicks