import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const UserStats = () => {

    const { user } = useContext(AuthContext)
    
  return (
    <div>
        <div className='bg-[#048950] xs:w-[300px] xs:h-[130px] xs:p-6 xs:rounded-xl xs:font-[sora] xs:text-white'>
            <strong className='xs:text-[25px]'>Welcome {user?.username}</strong>
            <p>What would you like to do?</p>
        </div>
    </div>
  )
}
