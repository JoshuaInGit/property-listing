import React from 'react'
import Bed from './assets/bed.png'
import Car from './assets/car.png'
import Arrow from './assets/location.png'

export default function Listing({posts}) {
  return (
    <div className="flex justify-center items-center h-[auto] bg-[#212121] p-4">
      <div className="grid grid-cols-1 grid-rows-[auto] gap-3 h-[auto] w-[95%] bg-[#212121] xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white text-black rounded-br-[20px] shadow 3xs:w-[full] h-[350px] xs:w-[auto]">
              {post.image && (
                <img
                  src={URL.createObjectURL(post.image)}
                  alt="House"
                  className="w-full h-[200px] object-cover  rounded-br-[20px]"
                />
              )}
              <div className='flex items-center p-3 text-[20px] text-black font-bold bg-white h-[40px]'>
                    <p>{post.name}</p>
                </div>
              <div className=' bg-[#7F0000] flex flex-col justify-center flex-grow rounded-br-[20px] p-[10px] gap-3'>
                <div className='flex justify-between'>
                  <div className='flex gap-2 items-center'>
                    <img src={Car}></img>
                    <p className='description'>
                      {post.park} Parking Space
                  </p>
                    </div>
                  <p  className='description'>
                    {post.Sqft} Sqft
                  </p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-2 items-center'>
                      <img src={Bed} className='h-[15px]'></img><p className='description'>{post.rooms} Bedroom</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                       <img src={Arrow} className='h-[15px]'></img><p className='description'>{post.loc}</p>
                      </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

