import React, { useState, useEffect, useContext } from 'react'
import axiosinstance from '../../utilis/axiosinstance'
import { Link } from 'react-router-dom'



export const RecentChurch = ({ searchQuery, setSearchQuery }) => {
  const [churches, setChurches] = useState([])

  useEffect(() => {
    const fetchChurches = async () => {
      try {

        //get the access token stored in the localstorage
        const accessToken = localStorage.getItem('accessToken')

        const response = await axiosinstance.get('/api/churches/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          params: {
            q: searchQuery
          }
        });
        setChurches(response.data);
        console.log(response.data)
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchChurches();
  }, [searchQuery]);
  
  return (
    <div className='xs:bg-white xs:px-4 xs:pt-3 xs:pb-4 xs:rounded-sm xs:border xs:border-gray-200 xs:flex-1'>
      <div className='xs:flex xs:justify-between'>
      <strong>Recent Churches</strong>
      <Link to={'/admin/churches'} className='xs:text-sky-700 xs:border xs:border-[#048950] xs:text-center xs:py-1 xs:w-20 xs:rounded-md xs:text-xs'>View All</Link>
      </div>

      <div className='xs:mt-3 xs:w-full sm:w-full sx:w-full sg:w-full  md:w-full  lg:w-full xs:overflow-x-scroll'>
          <table class=" table-auto xs:w-[800px] lg:w-full border-collapse">
                <thead>
                  <tr className='xs:text-left'>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Church Name</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Church Address</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Phone Number</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Parish</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Parish Priest</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {churches?.map((church) => (
                    <tr key={church.id}>
                      <td class="border border-gray-300 px-4 py-2">{church.church_name}</td>
                      <td class="border border-gray-300 px-4 py-2">{church.address}</td>
                      <td class="border border-gray-300 px-4 py-2">{church.phone_number}</td>
                      <td class="border border-gray-300 px-4 py-2">{church.parish}</td>
                      <td class="border border-gray-300 px-4 py-2">{church.parish_priest}</td>
                      <td class="border border-gray-300 px-4 lg:space-x-4 xs:space-y-3 xs:text-center py-2">
                        <Link to={`/admin/detailpage/${church.id}`} className='xs:border xs:border-[#048950] xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>View</Link>
                        <Link to={`/admin/delete/${church.id}`} className='xs:border xs:border-red-500 xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>Delete</Link>
                      </td>
                    </tr>
                    ))}
                </tbody>
        </table>

      </div>
      </div>
  )
}
