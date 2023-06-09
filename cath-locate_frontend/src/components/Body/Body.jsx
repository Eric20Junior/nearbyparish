import React from 'react'
import body1 from '../../assets/body1.png'
import line from '../../assets/line.png'


export const Body = () => {
  return (
    <div className='xs:mt-20 xs:mx-[50px]'>
        <div className='body-1 lg:flex lg:justify-between xs:font-[sora]'>
            <div className='xs:space-y-4'>
                <h1 className='xs:font-semibold xs:text-[36px] lg:text-[40px] xs:w-[300px]'>Grassroot Development Microfinance Bank</h1>

                <p className='xs:text-[#6C7279] xs:text-xs xs:w-[250px] xs:leading-6'>Wetland Microfinance bank started as Erikpo Community Bank in year 2000 and in 2005 following the transformation of community banks to Microfinance Bank and the subsequent policy on Microfinance,</p>

                <button className='xs:bg-[#048950] xs:rounded-[8px] xs:w-[100px] xs:h-[40px] lg:w-[140px] xs:text-white xs:text-[11px] lg:text-sm'>View Portfolio</button>
            </div>

            <div className="body-1_img lg:w-[600px] xs:mt-6">
                <img src={body1} alt="" />
            </div>
        </div>

        <div className='xs:my-16'>
            <img src={line} alt="line" className='xs:mx-auto' />
        </div>

        <div>
            <div className='xs:bg-[#239A67] xs:rounded-[16px] xs:w-[200px] xs:h-[100px] xs:mx-[35px] xm:mx-[50px] sm:mx-[175px] sd:mx-[185px] sg:mx-[210px] md:mx-[226px] lg:w-[600px] xl:w-[750px] lg:h-[100px] lg:mx-[150px] xl:mx-[240px] absolute '>
            </div>
            <div className='xs:bg-[#048950] xs:rounded-[16px] xs:w-[270px] xs:h-[600px] lg:w-[900px] lg:h-[260px] xl:h-[260px] xl:w-[1230px] xs:mx-auto relative xs:top-4 lg:top-4 '>
                <div className='xs:block lg:flex lg:justify-between xs:font-[sora] xs:p-10 xs:text-white lg:space-y-0 xs:space-y-8 '>
                    <div className='xs:space-y-6 lg:space-y-8'>
                        <p className='xs:bg-[#239A67] xs:rounded-full xs:w-[40px] xs:h-[40px] xs:text-center xs:py-2'>1</p>
                        <h1 className='xs:font-semibold'>Loans</h1>
                        <p className='xs:text-xs lg:w-[150px]'>We provide a safe, new and convenient online banking service (e-banking)</p>
                    </div>

                    <div className='xs:space-y-6 lg:space-y-8'>
                        <p className='xs:bg-[#239A67] xs:rounded-full xs:w-[40px] xs:h-[40px] xs:text-center xs:py-2'>2</p>
                        <h1 className='xs:font-semibold'>Our banking System</h1>
                        <p className='xs:text-xs lg:w-[150px]'>Enjoy flexible and quick fund transfer services with Wetland Microfinance!</p>
                    </div>

                    <div className='xs:space-y-6 lg:space-y-8'>
                        <p className='xs:bg-[#239A67] xs:rounded-full xs:w-[40px] xs:h-[40px] xs:text-center xs:py-2'>3</p>
                        <h1 className='xs:font-semibold'>Payments/cash deposit</h1>
                        <p className='xs:text-xs lg:w-[150px]'>Get cash fast! Enjoy convenient Wetland mobile banking service!</p>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}
