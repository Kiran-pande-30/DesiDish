import React from 'react'

const category = [
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        category: 'shawrma',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    },
    {
        id:1, 
        title : 'shawrma',
        price : '$850',
        img : 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg'
    }
]

const Categories = () => {
  return (
    <div className='max-w-1520px m-auto px-4 py-4'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categories</h1>

        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
            {category.map((item) => {
                return <div 
                key={item.id}
                className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                    <img
                    className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl' 
                    src={item.img}
                    alt={item.title}
                    />
                </div>
            })}
        </div>

    </div>
  )
}

export default Categories