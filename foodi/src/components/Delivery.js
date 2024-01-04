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
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p className='relative'>
                breaking the tranquil hush that enveloped the sleepy town. The cobblestone streets, worn by the footsteps of generations, bore witness to the passage of time. Wisps of morning mist clung to the edges of ancient buildings, casting an ethereal aura over the scene. A solitary bicycle leaned against a weathered lamppost, its tires whispering tales of distant journeys. The aroma of freshly brewed coffee wafted from a nearby cafe, tempting passersby with promises of warmth and awakening. Nature's canvas painted the sky in hues of pastel pink and gold, heralding the promise of a new day filled with untold possibilities.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
        
    </div>
  )
}

