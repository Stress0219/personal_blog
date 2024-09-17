import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.jpg"

const Banner = () => {
  return (
    <div>
      <div
      className="flex md:items-center overflow-x-hidden w-full"
    >
      
      <div className="relative">
        
        <div className="md:absolute md:inset-0 md:bg-black opacity-60"></div>
      
        
        <Image
        width={1500}
        height={900}
        src={banner}
        alt='lineas de codigo binario cayendo sobre un teclado verde'
        />
      
        
        <div className="md:absolute md:inset-0 flex flex-col text-neutral-200">
          <div className="w-full lg:mr-4 lg:p-7 p-3">
            <h1 className="text-3xl md:text-5xl font-bold md:mb-4 mb-2 text-center"><p className='font-extrabold text-blue-700'>Bienvenidos</p>al blogazo del tipo mas duro de to esto</h1>
          </div>
          <div className=" invisible md:visible md:flex md:justify-center md:items-center m-auto">
            <button className="items-center p-4 font-bold text-2xl bg-blue-700 rounded-xl hover:bg-blue-600"><a href="#">Conoce mas</a></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner