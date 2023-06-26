import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../utilis/axiosinstance'

export const DeleteFaq = () => {

  const params = useParams()
  const id = params.id
  const navigate = useNavigate()

  const deleteFaq = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const response = await axiosInstance.delete(`/api/faqs/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log('Faq deleted successfully')
      navigate('/admin/faq')
      return response.data

    } catch (error) {
      console.log('Error deleting faq', error)
    }
  }
  
  return (
    <div>
        <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='xs:text-black text-xs'>ARE YOU SURE WANT TO DELETE</p>
            <button onClick={deleteFaq} className='border border-black rounded w-20 h-8 mt-4 text-center'>Yes</button>

            <Link to={'/admin/faq'} className='border border-black rounded w-20 h-8 mt-4 text-center'>No</Link>
          </div>
    </div>
  )
}
