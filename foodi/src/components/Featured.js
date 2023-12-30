import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDoFilled, RxDotFilled} from 'react-icons/rx'


const Featured = () => {
    const sliders = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;

        setCurrentIndex(newIndex);
    }

    const moveToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
  return (
    <div className='max-w-[1520] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>

        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((slideItems, slideIndex) => (
                    <div 
                    key={slideIndex}
                    onClick={() => moveToSlide (slideIndex)}
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Featured