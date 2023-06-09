import React, { useEffect, useState } from 'react'
import axiosinstance from '../utilis/axiosinstance'
import { useNavigate } from 'react-router-dom';



export const CreateProfile = () => {

  const [churchname, setChurchname] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [parish, setParish] = useState('')
  const [website, setWebsite] = useState('')
  const [parishpriest, setParishpriest] = useState('')
  const [establisheddate, setEstablisheddate] = useState('')

  const navigate = useNavigate()

    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken)
  
  // Function to handle form submission
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const profileData = {
          church_name: churchname,
          phone_number: phonenumber,
          address,
          description,
          parish,
          website,
          parish_priest: parishpriest,
          established_date: establisheddate,
        };
    
        axiosinstance
          .post('/api/create/', profileData, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            // Handle the successful response
            console.log('Profile created successfully');
            navigate('/dashboard'); // Redirect to the dashboard or desired page
          })
          .catch((error) => {
            // Handle the error
            console.error('Error creating profile:', error);
          });
      };
    
  return (
    <>
        <div className='shadow-lg lg:h-[560px] lg:w-[600px] sm:w-[800px] mx-auto'>
            <div className='sm:border sm:border-[#BDBDBD] sm:mx-auto sm:w-[400px] sm:h-[540px] sm:rounded-[20px] text-[#333333] text-center'>

            <div className='p-4'>

                <h1 className='font-bold w-60 lg:text-right'>Create Profile</h1>

            </div>

                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div>
                        <input type="text" 
                        name="churchname" 
                        placeholder='church name' 
                        value={churchname}
                        onChange={(event) => setChurchname(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                    <input type="text" 
                        name="address" 
                        placeholder='address' 
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="text" 
                        name="phonenumber" 
                        placeholder='phone number' 
                        value={phonenumber}
                        onChange={(event) => setPhonenumber(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="text" 
                        name="description" 
                        placeholder='description'
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="text" 
                        name="parish" 
                        placeholder='parish' 
                        value={parish}
                        onChange={(event) => setParish(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="text" 
                        name="website" 
                        placeholder='website' 
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="text" 
                        name="parishpriest" 
                        placeholder='parish priest' 
                        value={parishpriest}
                        onChange={(event) => setParishpriest(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div>
                        <input type="date" 
                        name="establisheddate" 
                        placeholder='established date' 
                        value={establisheddate}
                        onChange={(event) => setEstablisheddate(event.target.value)}
                        className='border border-[#BDBDBD] rounded h-[40px] w-[210px] lg:w-[300px] p-2 text-[#828282] text-sm' />
                    </div>

                    <div className='w-[300px] h-[35px] rounded bg-[#2F80ED] mt-8 text-white mx-auto py-1.5 text-sm font-bold'>
                        <button type="submit">Create Profile</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}
