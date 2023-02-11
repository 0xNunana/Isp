import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-10 bg-teal-100'>
        <div className='flex-grow'>copyright</div>
        <div className='flex-grow'>
          <Image src={"/p22.png"} height={10} width={100} alt="pesewa"/>
          </div>
        <div className='justify-end'>socials</div>
    </div>
  )
}

export default Footer