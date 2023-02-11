import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='max-w-screen-lg p-10 bg-slate-100 mx-auto relative -z-20'>
        <Image src="/More Speed Easy life.png" width={1080} height={100} alt="banner" object-fit="contain"/>
    </div>
  )
}

export default Banner