import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../utilis/axiosinstance'

export const Users = () => {

  const [users, setUsers] = useState()

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get('/account/users/')
      const data = response.data
      setUsers(data)
      console.log(data)
    } catch (error) {
      throw(error)
    }
  }
  
  return (
    <>
        <div className='xs:bg-white xs:px-4 xs:pt-3 xs:pb-4 xs:border xs:border-gray-200 lg:w-[60rem] lg:mx-auto xs:flex xs:justify-between xs:items-center'>
        <strong>Users</strong>
    </div>

<div className='xs:mt-3 xs:w-full sm:w-full sx:w-full sg:w-full  md:w-full  lg:w-[60rem] lg:mx-auto xs:overflow-x-scroll'>
<table class=" table-auto xs:w-[800px] lg:w-full border-collapse">
      <thead>
        <tr className='xs:text-left'>
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">Username</th>
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">First Name</th>
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">Last Name</th>
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">Email</th>
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">Status</th>
      
          <th class="bg-gray-100 border border-gray-300 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
   
        {users?.map((user) => (
          <tr key={user.id}>
          <td class="border border-gray-300 px-4 py-2">{user.username}</td>
          <td class="border border-gray-300 px-4 py-2">{user.first_name}</td>
          <td class="border border-gray-300 px-4 py-2">{user.last_name}</td>
          <td class="border border-gray-300 px-4 py-2">{user.email}</td>
          <td class="border border-gray-300 px-4 py-2">{user.is_active}</td>
        
          <td class="border border-gray-300 px-4 lg:space-x-4 xs:space-y-3 xs:text-center py-2">
            {/* <Link to={`/admin/faq/update/`} className='xs:border xs:border-[#048950] xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>Update</Link> */}
            <Link to={`/admin/users/delete/${user.id}`} className='xs:border xs:border-red-500 xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>Delete</Link>
          </td>
        </tr>
        ))}

      </tbody>
</table>

</div>
    </>
  )
}
