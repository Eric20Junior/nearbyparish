import React, { useState, useRef } from 'react'
import { Header } from '../../components'
import axiosInstance from '../../utilis/axiosinstance'
import emailjs from '@emailjs/browser';

export const SupportForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      emailjs.sendForm('service_fxv54bl', 'template_or4jyxn', e.target, 'wkfDxKfkaZ388lOV4')
      .then((result) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

      await axiosInstance.post('/api/support/', {
        name,
        email,
        message,
      }, {
        timeout: 10000
      });

      const response = () => {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }
      return response.data
    } catch (error) {
      console.log('Error submitting form', error);
   
    } finally {
      setIsSubmitting(false);
    }
    
  };
    
  return (
    <>
    <Header/>
    
    <div className='xs:bg-slate-200 xs:h-[700px] xs:flex xs:items-center '>
        <div className='xs:bg-white xs:px-4 xs:py-10 xs:pb-4 xs:border xs:border-gray-200 xs:h-[600px] md:w-[600px] lg:h-[600px] lg:w-[60rem] xs:mx-auto xs:font-[sora] lg:mx-auto xs:rounded-md'>
          <strong className='xs:text-[20px]'>Support Page</strong>

          <form ref={form} onSubmit={handleSubmit}>
            <div className='xs:block xs:mt-10 xs:py-6'>
              <div className='xs:space-y-4'>
                <label className='xs:text-[#048950] xs:font-semibold'>
                  Name:
                </label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='xs:w-full xs:h-[40px] xs:border xs:border-black xs:rounded-md'
                  required
                />
              </div>

              <div className='xs:space-y-4 xs:mt-10'>
                <label className='xs:text-[#048950] xs:font-semibold'>
                  Email:
                </label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='xs:w-full xs:h-[40px] xs:border xs:border-black xs:rounded-md'
                  required
                />
              </div>

              <div className='xs:mt-10 xs:space-y-4'>
                <label className='xs:text-[#048950] xs:font-semibold'>
                  Your Request:
                </label>
                <textarea
                  cols='30'
                  rows='10'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='xs:w-full xs:h-[100px] xs:border xs:border-black xs:rounded-md'
                  placeholder='Enter your Message here...'
                  required
                />
              </div>

              <button
                className='xs:bg-[#048950] xs:w-[100px] xs:h-[40px] xs:rounded-md xs:text-white xs:font-bold xs:text-center xs:py-1.5'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
