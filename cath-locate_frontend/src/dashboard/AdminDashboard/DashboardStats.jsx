import React from 'react'
import { IoBagHandle } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi'


export const DashboardStats = () => {
  return (
    <div className='xs:flex xs:flex-wrap xm:justify-center xs:gap-1 lg:flex lg:gap-4 xs:w-full'>
        <BoxWrapper>
            <div className='xs:rounded-full xs:h-12 xs:w-12 xs:flex xs:items-center xs:justify-center xs:bg-[#048950]'>
                <HiOutlineUsers className='xs:text-2xl xs:text-white' />
            </div>
            <div className='xs:pl-4'>
                <span className='xs:text-sm xs:text-gray-500 xs:font-light'>Total Users</span>
            
                <div className='xs:flex xs:items-center'>
                    <strong className='xs:text-xl xs:text-gray-700 cd:font-semibold'>12345</strong>
                    <span className='xs:text-xs xs:text-green-500 xs:pl-2'>+234</span>
                </div>
            </div>
        </BoxWrapper>
        
        <BoxWrapper>
            <div className='xs:rounded-full xs:h-12 xs:w-12 xs:flex xs:items-center xs:justify-center xs:bg-[#048950]'>
                <IoBagHandle className='xs:text-2xl xs:text-white' />
            </div>
            <div className='xs:pl-4'>
                <span className='xs:text-sm xs:text-gray-500 xs:font-light'>Total Churches</span>
            
                <div className='xs:flex xs:items-center'>
                    <strong className='xs:text-xl xs:text-gray-700 cd:font-semibold'>12345</strong>
                    <span className='xs:text-xs xs:text-green-500 xs:pl-2'>+234</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
            <div className='xs:rounded-full xs:h-12 xs:w-12 xs:flex xs:items-center xs:justify-center xs:bg-[#048950]'>
                <IoBagHandle className='xs:text-2xl xs:text-white' />
            </div>
            <div className='xs:pl-4'>
                <span className='xs:text-sm xs:text-gray-500 xs:font-light'>New Users</span>
            
                <div className='xs:flex xs:items-center'>
                    <strong className='xs:text-xl xs:text-gray-700 cd:font-semibold'>12345</strong>
                    <span className='xs:text-xs xs:text-green-500 xs:pl-2'>+234</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
            <div className='xs:rounded-full xs:h-12 xs:w-12 xs:flex xs:items-center xs:justify-center xs:bg-[#048950]'>
                <IoBagHandle className='xs:text-2xl xs:text-white' />
            </div>
            <div className='xs:pl-4'>
                <span className='xs:text-sm xs:text-gray-500 xs:font-light'>Request</span>
            
                <div className='xs:flex xs:items-center'>
                    <strong className='xs:text-xl xs:text-gray-700 cd:font-semibold'>12345</strong>
                    <span className='xs:text-xs xs:text-green-500 xs:pl-2'>+234</span>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
    return <div className='xs:bg-white xs:rounded-sm xs:p-4 xs:flex xs:items-center xs:flex-1 xs:border xs:border-gray-200'>{children}</div>
}
