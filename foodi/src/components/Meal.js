import React from 'react'
import {ArrowSmRightIcon} from '@heroicons/react/outline'

const mealData = [
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

const Meal = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Meals</h1>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>

            {
                mealData.map((item) => (
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.img} 
                        alt= {item.image}
                        className='w-full h-[200px] object-cover rounded-lg'/>

                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.title}</p>
                            <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                        </div>

                        <div className='pl-2 py-4 -mt-7'>
                            <p className='flex items-center text-indigo-600'>View More<ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div> 
                ))
            }

        </div>
    </div>
  )
}

export default Meal