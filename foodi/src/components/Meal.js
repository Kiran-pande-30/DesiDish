import React,{useState} from 'react'
import {ArrowSmRightIcon} from '@heroicons/react/outline'

const mealData = [
    {
        id:1, 
        title : 'Dabangg Thali',
        category: 'Thali',
        price : 'Rs. 350',
        img : 'https://media.istockphoto.com/id/1266097353/photo/vegetarian-food-thali-or-platter-from-maharashtra-india.jpg?s=612x612&w=0&k=20&c=lPaUODaRBzpUPcQrYBcwjEhXElmCspoF-EBOIT9NGNE='
    },
    {
        id:2, 
        title : 'Bahubaali Thali',
        category: 'Thali',
        price : 'Rs. 230',
        img : 'https://thumbs.dreamstime.com/b/indian-bahubali-thali-available-maharashtra-city-pune-biggest-veg-thali-having-various-type-indian-cuisine-indian-bahubali-168206531.jpg'
    },
    {
        id:3, 
        title : 'Thali',
        category: 'Thali',
        price : 'Rs. 200',
        img : 'https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=13bRDToMDNZNSNAaMkKdLoBfsHffHQi5b_pNis8LtcI='
    },
    {
        id:4, 
        title : 'Matar Paneer',
        category: 'Paneer',
        price : '$850',
        img : 'https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=L7vx8uFS44hB1fvvTEYZ3-yrvCIzCasrbcJwYunzIjE='
    },
    {
        id:5, 
        title : 'Punjabi Thali',
        category: 'Thali',
        price : '$850',
        img : 'https://ssl.bigstockimages.com/6/2/1/large2/126974579.jpg'
    },
    {
        id:6, 
        title : 'Shahi Paneer',
        category: 'Paneer',
        price : '$850',
        img: 'https://media.istockphoto.com/id/1887477929/photo/paneer-hyderabadi.webp?b=1&s=170667a&w=0&k=20&c=GWJBhVoPqAvfJJTJAwRRNNXm7FENccLLs_7wgB4_Hm8='
    },
    {
        id:7, 
        title : 'Kadhai Paneer',
        category: 'Paneer',
        price : 'Rs. 120',
        img: 'https://i.pinimg.com/736x/5c/31/d2/5c31d209696ff26ac0def1b679075f47.jpg'
    },
    {
        id:8 ,
        title : 'Butter Masala',
        category: 'Paneer',
        price : 'Rs 240',
        img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg'
    },
    {
        id:9,
        title : 'Paneer Tikka',
        category: 'Paneer',
        price : 'Rs. 280',
        img: 'https://media.istockphoto.com/id/1389160681/photo/chilli-mushroom-indian-snack-food.webp?b=1&s=170667a&w=0&k=20&c=oqLPJp1FA91qWk8AZzrNzVA5V2X1W2aLkWMxeuFaDx8='
    },

    //New
    {
        id:10,
        title : 'Veg Biryani',
        category: 'Biryani',
        price : 'Rs. 350',
        img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id:11,
        title : 'Biryani',
        category: 'Biryani',
        price : 'Rs. 230',
        img: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D'
    }
]

const Meal = () => {
    const [foods, setFoods] = useState(mealData);
    const filterCat = (category) =>{
        setFoods(
            mealData.filter((item) =>{
                return item.category === category;
            })
        );
    };
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Meals</h1>

        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center'>
                <button 
                
                onClick={() => setFoods(mealData)}
                className='m-1  text-white bg-orange-700  hover:bg-white hover:text-orange-700 border-orange-700'>All</button>
                <button 
                onClick={() => filterCat('Thali')}
                className='m-1  text-white bg-orange-700 hover:bg-white hover:text-orange-700 border-orange-700'>Thali</button>
                <button 
                onClick={() => filterCat('Paneer')}
                className='m-1 text-white bg-orange-700 hover:bg-white hover:text-orange-700 border-orange-700'>Paneer</button>
                <button 
                onClick={() => filterCat('Biryani')}
                className='m-1  text-white bg-orange-700 hover:bg-white hover:text-orange-700 border-orange-700'>Biryani</button>
            </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>

            {
                foods.map((item) => (
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
};

export default Meal