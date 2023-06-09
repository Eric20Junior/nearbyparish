import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosinstance from '../utilis/axiosinstance'
import {AuthContext} from '../context/AuthContext'

export const DetailPage = () => {

  const { user } = useContext(AuthContext)


    const [detailpage, setDetailPage] = useState()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        getdetailpage()
    }, [])

    const getdetailpage = async () => {
        try {
          const accessToken = localStorage.getItem('accessToken')
          const response = await axiosinstance.get(`/api/details/${id}/`, {
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          })
          const data = response.data
          console.log(data)
          setDetailPage(data)
        } catch (error) {
          console.log('Error loading page', error)
        }
    }
    
  return (
    <>
        {detailpage ? 
        
        <div>
            <div className='text-center pb-10 '>
        <h1 className='text-[24px] font-normal'>Church info</h1>
        <p className='text-xs font-light'>Basic info, like church name, address.</p>
      </div>

      <div className='sm:border sm:rounded-[12px] md:w-[800px] sm:mx-auto'>
        <div className='flex justify-between px-5 sm:m-6'>
          <div>
            <h1 className='font-normal text-[24px]'>Church</h1>
            <p className='text-xs w-24 sm:w-60 font-medium text-[#828282]'>Some info may be visible to other people</p>
          </div>

              {/* this checks if a user is the creator of a profile */}
              {user?.user_id === detailpage?.id && (
                <>
                  <Link to={`/update/${id}`} className='border border-black rounded w-20 h-8 mt-4 text-center'>Edit</Link>
    
                  <Link to={`/delete/${id}`} className='border border-black rounded w-20 h-8 mt-4 text-center'>Delete</Link>
                </>
              )}

        </div>

        <div className='mt-14 space-y-9'>
          <div className='flex justify-between px-5 border-b-2 sm:border'> 
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>CHURCH NAME</p>
            <p className='text-xs'>{detailpage.church_name}</p>
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>ADDRESS</p>
            <p className='text-xs'>{detailpage.address}</p>
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>PHONE NUMBER</p>
            <p className='text-xs'>{detailpage.phone_number}</p>
          </div>

          <div className='flex justify-between space-x-6 px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>DESCRIPTION</p>
            <p className='text-xs'>{detailpage.description}</p>
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>PARISH</p>
            <p className='text-xs'>{detailpage.parish}</p>
          </div>

          <div className='flex justify-between space-x-4 px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>WEBSITE</p>
            <p className='text-xs'>{detailpage.website}</p>
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>PARISH PRIEST</p>
            <p className='text-xs'>{detailpage.parish_priest}</p>
          </div>

          <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>ESTABLISHTED DATE</p>
            <p className='text-xs'>{detailpage.established_date}</p>
          </div>

        </div>
      </div>
        </div> : null}
    </>
  )
}
