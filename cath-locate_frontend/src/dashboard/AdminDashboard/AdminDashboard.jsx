import React from 'react'
import { DashboardStats } from './DashboardStats'
import { RecentChurch } from './RecentChurch'

export const AdminDashboard = () => {
  return (
    <div className='xs:flex xs:flex-col lg:gap-4 '>
      <DashboardStats/>
      <div className='lg:flex lg:flex-row lg:gap-4'>
        {/* <DashboardCharts/>
        <Userstats/> */}
      </div>

      <div className='lg:flex lg:flex-row w-full lg:gap-4 xs:pt-6 xs:space-y-4'>
      <RecentChurch/> 
      {/* <RecentUsers/>  */}
      </div>
  </div>
  )
}

