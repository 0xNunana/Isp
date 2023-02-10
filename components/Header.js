import React from 'react'
import {Menu, User, UserCheck} from "react-feather"
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
    const {data:session}=useSession();
  return (
    <div className='flex bg-gray-200 p-5 bg-gradient-to-t from-slate-300 to-slate-100'>
        <div className='flex-grow'>image</div>
        <div className='flex-grow'>Profile name</div>
        <div className="flex justify-end space-x-4">
            <div>
                <Menu/>
            </div>
            <div>
               <div onClick={signIn} className='link'>
                    <p className='hover:underline'>
                      {session?`Hello, ${session.user.name}`:"Sign In"}
                    </p>
                   
                </div>
                
            </div>
            <div>🇬🇭 </div>
        </div>
        
      
    </div>
  )
}

export default Header