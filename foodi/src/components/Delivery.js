import React from 'react'

export const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1520px] w-full mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            </img>

            <div className='flex flex-col justify-center m-4'>
                <p className='text-[#00df9a] font-bold' >Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Delectable Delights</h1>
                <p className='relative'>
                Welcome to <span className='font-bold text-orange-600'>Desi Dish</span> your portal to the vibrant world of Indian cuisine. Indulge in the rich tapestry of flavors with our curated menu featuring authentic Indian dishes. From aromatic biryanis to savory curries, each dish is a culinary masterpiece crafted with passion. Experience the essence of India in every bite, conveniently ordered from the comfort of your home. Explore our menu, savor the extraordinary, and let Desi Dish bring the deliciousness of Indian cuisine to your doorstep.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
        
    </div>
  )
}

