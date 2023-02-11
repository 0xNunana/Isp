import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Offers = () => {
  const {data:session}=useSession()
  if (!session){
    return(
      <div >
        <p className='text-center font-medium text-2xl bg-slate-100 mx-10 py-3' >
          To View Available offers and Access Profile</p>
        <div className="flex">
          <button className="bg-green-200 rounded-lg flex-grow mx-10 py-5" onClick={signIn}> Sign In </button>
          <button className="bg-gray-200 rounded-lg flex-grow mx-10 py-5" > Sign-Up </button>
        </div>
        
      </div>
    )
  }
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  shadow-lg p-7'>

        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-red-100'>
          <div className='relative border-b-black border-b-4 pb-2 pl-10 pt-4 -z-5'>
            <Image src="/assets/cloud-wrench-icon.svg" width={175} height={70} alt="settings"/>
            
              </div>
          Settings</div>
        <div className=' hover:scale-110 my-2 mx-3  rounded-xl p-10 bg-orange-100'>
          <div className='relative border-b-black border-b-4 pb-2 pl-10 -z-5 pt-5'>
            <Image src="/assets/mobile-data-arrows-icon.svg" width={100} height={70} alt="data"/>
            
              </div>
          data</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-yellow-100'>
         <div className='relative border-b-black border-b-4 pb-2 pl-10  -z-5'>
            <Image src="/assets/wallet-money-icon.svg" width={105} height={70} alt="recharge"/>
            
              </div>
          Recharge</div>
        <div className='hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-lime-100'>
          <div className='relative border-b-black border-b-4 pb-2 pl-10 -z-5'>
            <Image src="/assets/dashboard-monitoring-icon.svg" width={100} height={70} alt="usage"/>
            
              </div>
          Usage</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-emerald-100'><div className='relative border-b-black border-b-4 pb-2 pl-10 -z-5'>
            <Image src="/assets/cloud-wrench-icon.svg" width={150} height={70} alt="settings"/>
            
              </div>
          hotspot</div>
        <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-cyan-100'>
          <div className=' hover:scale-110 my-2 mx-3 rounded-xl p-10 bg-emerald-100'><div className='relative border-b-black border-b-4 pb-2 pl-10 -z-5'>
            <Image src="/assets/call-us-icon.svg" width={100} height={70} alt="call"/>
            
              </div>
          
          Contact</div>
       </div>
    </div>
  )
}

export default Offers