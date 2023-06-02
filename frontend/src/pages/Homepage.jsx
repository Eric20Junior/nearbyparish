import React from 'react'

export const Homepage = () => {
  return (
    <div>
        <div className='sm:border-hidden sm:w-[400px] sm:mx-auto'>
            <form className='flex space-x-3 mx-2'>
                <div>
                    <input type="search" name="search" className='border border-[#BDBDBD] rounded h-[40px] w-[250px] mt-4 p-2 text-[#828282] text-sm'  />
                </div>

                <div className='w-[100px] h-[40px] rounded bg-[#2F80ED] mt-4 text-white text-center py-2 text-sm font-bold'>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>

        <div className='shadow-lg h-[450px] w-[600px] sm:w-[800px] mx-auto'>
            
        </div>
    </div>
  )
}
