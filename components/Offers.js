import React from 'react'

const Offers = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  shadow-lg p-7'>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-red-100'>manage</div>
        <div className=' hover:scale-110 my-2 mx-3  rounded-xl p-10 bg-orange-100'>data</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-yellow-100'>recharge</div>
        <div className='hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-lime-100'>usage</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-emerald-100'>hotspot</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-cyan-100'>Contact</div>
       
    </div>
  )
}

export default Offers