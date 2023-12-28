import React,{useState} from 'react'


const Featured = () => {
    const sliders = [
        {
            url: 'https://drive.google.com/drive/u/1/home://images.app.goo.gl/9dTbSJFb6FmaskXK9'
        },
        {
            url: 'https://images.app.goo.gl/8vJpjrXAFi82nEJg7'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='max-w-[1520] h-[500px] w-full py-4 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
    </div>
  )
}

export default Featured