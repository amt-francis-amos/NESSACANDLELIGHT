import React from 'react'
import { mission } from '../assets/assets'

const Mission = () => {





  return (
    <div className='px-4 lg:p-32'>
        <div className='flex flex-col md:flex-row gap-5 items-center'>
          {mission.map((item, index) => (
            <div key={index} className='bg-white mt-10 text-center shadow-lg p-10'>
              <h1 className='text-2xl  md:text-4xl mb-4 text-purple-500 font-semibold'>{item.title}</h1>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Mission