import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const topPicks = [
    {
        id:1, 
        title : 'Puran Poli',
        price : 'Rs. 60',
        img : 'https://t4.ftcdn.net/jpg/02/70/36/75/360_F_270367565_FB3Wvmm3exlB4gh5YcRsAzqTlmSK0Px5.jpg'
    },
    {
        id:2, 
        title : 'Vada Pav',
        price : 'Rs. 30',
        img : 'https://media.istockphoto.com/id/537817390/photo/vada-pav-or-vada-pav.webp?b=1&s=170667a&w=0&k=20&c=i_bt2Arncv4nGdAVJkvza7br3CjHHfkrnEE6VenmNBg='
    },
    {
        id:3, 
        title : 'Thali',
        price : 'Rs. 200',
        img : 'https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=13bRDToMDNZNSNAaMkKdLoBfsHffHQi5b_pNis8LtcI='
    },
    {
        id:4, 
        title : 'Misal Pav',
        price : 'Rs. 140',
        img : 'https://media.istockphoto.com/id/1062088258/photo/misal-a-maharashtrian-dish.webp?b=1&s=170667a&w=0&k=20&c=n0BEbqDzSuJvozBMv5qnf4wQOifoXQaH6LHyiUcWURI='
    },
    {
        id:5, 
        title : 'Sabji Thali',
        price : 'Rs. 350',
        img : 'https://media.istockphoto.com/id/1266097353/photo/vegetarian-food-thali-or-platter-from-maharashtra-india.jpg?s=612x612&w=0&k=20&c=lPaUODaRBzpUPcQrYBcwjEhXElmCspoF-EBOIT9NGNE='
    },
    {
        id:6, 
        title : 'Upwas Thali',
        price : 'Rs. 230',
        img : 'https://www.shutterstock.com/image-photo/navratri-upwas-thali-fasting-food-260nw-1518092819.jpg'
    },
    {
        id:7, 
        title : 'Till Ladu',
        price : 'Rs. 90',
        img : 'https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1haGFyYXNodHJpYW4lMjBmb29kfGVufDB8fDB8fHww'
    },
    {
        id:8, 
        title : 'Pizza',
        price : 'Rs. 450',
        img : 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1haGFyYXNodHJpYW4lMjBmb29kfGVufDB8fDB8fHww'
    },
    {
        id:9, 
        title : 'Dahi Wada',
        price : 'Rs. 80',
        img : 'https://images.unsplash.com/photo-1680764955303-81618ecb67b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhZGElMjBwYXZ8ZW58MHx8MHx8fDA%3D'
    }
]

const TopPicks = () => {
  return (
    <>
    <h1 className='hidden lg:block lg:text-orange-500 font-bold text-2xl text-center py-2'>Snacks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>

        <Splide options={{perPage: 4, gap: "0.5rem", drag: 'free', arrows: false}}>
        {
            topPicks.map((item)=>{
                return (
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative'>
                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                             <p className='px-2 font-bold text-2xl pt-4'> {item.title} </p>
                             <p className='px-2'>{item.price}</p>
                             <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl   cursor-pointer hover:scale-105 ease-out duration-300' 
                        src={item.img}
                        alt={item.title}/>
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