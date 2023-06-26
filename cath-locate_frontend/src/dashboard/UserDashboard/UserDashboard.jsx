import React from 'react'
import { RecentChurch } from './RecentChurch'
import { UserStats } from './UserStats'

export const UserDashboard = () => {
  return (
    <div>
        <div className='xs:flex xs:flex-col lg:gap-4 '>
            <UserStats/>
            <div className='lg:flex lg:flex-row lg:gap-4'>
                
            </div>

            <div className='lg:flex xs:items-center lg:flex-row w-full lg:gap-4 xs:pt-6 xs:space-y-4'>
            <div className='xs:w-[600px] xs:mt-4 '>
              <RecentChurch/> 
            </div>
            <div className='xs:w-[630px] '>
              <RecentChurch/> 
            </div>
            </div>

            <div className=''>
            <RecentChurch/> 
            </div>
        </div>
    </div>
  )
}
