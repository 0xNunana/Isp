import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Connection = () => {
    const {data:session}=useSession()
    if (session){
        return(
            <div className="pt-2">
               <Image src={"/greenrouter.png"} width={50} height={10} alt="green"/>
            </div>
        )
    }
  return (
    <div className="pt-2">
            <Image src={"/redrouter.png"} width={50} height={10} alt="red"/>
    </div>
  )
}

export default Connection