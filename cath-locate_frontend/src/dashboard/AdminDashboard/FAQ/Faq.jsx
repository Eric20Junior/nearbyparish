import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../utilis/axiosinstance'

export const Faq = () => {

  const [faqs, setFaqs] = useState()

  useEffect(() => {
    getFaq()
  }, [])

  const getFaq = async () => {
    try {
      const response = await axiosInstance.get('/api/faqs/')
      const data = response.data
      setFaqs(data)
      console.log(data)
    } catch (error) {
      throw(error)
    }
  }
  
  return (
    <div>
      <div className='xs:bg-white xs:px-4 xs:pt-3 xs:pb-4 xs:border xs:border-gray-200 lg:w-[60rem] lg:mx-auto xs:flex xs:justify-between xs:items-center'>
      <strong>Frequently Asked Questions</strong>
      <Link to={'/admin/faq/create'} className='xs:bg-[#048950] xs:w-[120px] lg:w-[100px] xs:h-[40px] xs:rounded-md xs:text-white xs:font-bold xs:text-center xs:text-sm xs:py-2'>Create Faq</Link>
      </div>

      <div className='xs:mt-3 xs:w-full sm:w-full sx:w-full sg:w-full  md:w-full  lg:w-[60rem] lg:mx-auto xs:overflow-x-scroll'>
          <table class=" table-auto xs:w-[800px] lg:w-full border-collapse">
                <thead>
                  <tr className='xs:text-left'>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">FAQ Questions</th>
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">FAQ Answers</th>
                
                    <th class="bg-gray-100 border border-gray-300 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {faqs?.map((faq) => (
                  <tr key={faq.id}>
                    <td class="border border-gray-300 px-4 py-2">{faq.question}</td>
                    <td class="border border-gray-300 px-4 py-2">{faq.answer}</td>
                  
                    <td class="border border-gray-300 px-4 lg:space-x-4 xs:space-y-3 xs:text-center py-2">
                      <Link to={`/admin/faq/update/${faq.id}`} className='xs:border xs:border-[#048950] xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>Update</Link>
                      <Link to={`/admin/faq/delete/${faq.id}`} className='xs:border xs:border-red-500 xs:px-4 xs:py-2 xs:w-16 xs:rounded-md xs:text-xs'>Delete</Link>
                    </td>
                  </tr>
                ))}
                </tbody>
        </table>

      </div>
    </div>
  )
}
