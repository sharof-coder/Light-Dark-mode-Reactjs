import React from 'react'
import { useSelector } from 'react-redux'
const data = [
    {   
        id: 1,
        name: 'Bouquet',
        price: '52.50 $',
        strpr: '60 $',
        img: './src/assets/rose/card5.png'
    },
    {
        id: 2,
        name: 'Red Tulips 25pc',
        price: '4♠6 $',
        img: './src/assets/rose/card6.png'
    },
    {
        id: 3,
        name: 'Pink Rose 15pc',
        price: '34 $',
        img: './src/assets/rose/card7.png'
    },
    {
        id: 4,
        name: 'Bouquet "Sunny"',
        price: '70 $',
        img: './src/assets/rose/card8.png'
    }
]

const Cards2 = () => {
    const { darkMode } = useSelector(state => state.mode)
  return (
    <main className='cards'>
        <div className={`top-card ${darkMode ?'text-white' : 'text-black'} flex justify-between py-14`}>
            <h1 className='font-semibold text-[24px]'>Title</h1>
            <span className='mr-[92px] text-3xl  '>&#8594;</span>
        </div>
        <div className={`bottom-card w-[72.5rem] h-[22.875rem] flex gap-[2.5rem] ${darkMode ?'text-white' : 'text-black'}`}>
        {data.map(item => (
            <div className="cards-child w-[16.25rem] h-[22.875rem]" key={item.id}>
                <div className="img-div w-[16.25rem] h-[16.25rem]">
                    <img src={item?.img} alt={item.name} />
                </div>
                    <div className="description text-center">
                        <h2>{item.name}</h2>
                        <br />
                        <span>{item.price}</span> &nbsp;
                        {item?.strpr ? (
                            <span className='opacity-70'>{item.strpr}</span>
                        ): <span></span>}
                    </div>
            </div>
        ))}
            
        </div>
    </main>
  )
}

export default Cards2