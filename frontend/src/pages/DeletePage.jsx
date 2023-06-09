import React from 'react'
import axoisInstance from '../utilis/axiosinstance';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const DeletePage = () => {
    const params = useParams()
    const deleteId = params.id

    const navigate = useNavigate()

    const deleteProfile = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await axoisInstance.delete(`/api/delete/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            navigate('/dashboard')
            return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to delete profile');
        }
      };
  return (
    <div>
        <div className='flex justify-between px-5 border-b-2 pb-8'>
            <p className='text-[#BDBDBD] text-xs'>ARE YOU SURE WANT TO DELETE</p>
            <button onClick={deleteProfile} className='border border-black rounded w-20 h-8 mt-4 text-center'>Yes</button>

            <Link to={'/dashboard'} className='border border-black rounded w-20 h-8 mt-4 text-center'>No</Link>
          </div>
    </div>
  )
}
