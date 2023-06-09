import React from 'react'
import services from '../../assets/services.png'
import l01 from '../../assets/l01.png'
import l02 from '../../assets/l02.png'
import l04 from '../../assets/l04.png'
import l05 from '../../assets/l05.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import {ArrowButtonRight} from '../ArrowButtonRight'

export const Card = () => {
  return (
    <div className='xs:mt-20 xs:mx-[20px] xl:mx-[1px]'>
      <div className='xs:block lg:flex lg:justify-around xs:mt-24 xs:mb-20'>
            <div className="body2_img xs:mb-[230px] xs:mx-[40px] xm:mx-[70px] sd:mx-[90px] sg:mx-[140px] lg:mx-[1px] ">
                <img src={services} alt="services" className='xs:h-[400px] lg:h-[500px] sd:h-[350px] sd:w-[400px] sx:w-[400px] sx:h-[370px] sg:h-[320px] sg:w-[400px] absolute' />
                    <div className='service-text relative xs:top-[80px] lg:top-[190px] xs:font-[sora] xs:text-white xs:px-5 lg:px-6 xs:space-y-4  '>
                        <h1 className='xs:font-semibold xs:text-[24px] lg:text-[29px]'>Our Loan services</h1>
                        <p className='xs:text-xs xs:leading-5 sd:leading-7 sx:leading-7 sg:leading-7 xs:w-[200px] sd:w-[300px] sx:w-[300px] sg:w-[300px] lg:w-[300px] '>We have array of financial products and services that are adapted to meet the financial needs of our various customers. Specifically, our products and services address the requirement of our clients in the areas of savings, investments, borrowings, and advisory services. They include</p>
                    </div>
            </div>
            
            <div className='xs:grid xs:grid-rows-2 xs:grid-cols-2 xs:font-[sora] sd:mx-[40px] sg:mx-[40px]'> 
                <div className='xs:space-y-4 xs:border-[#6C7279] xs:border-l xs:pl-2 xs:w-[200px] xs:h-[190px] xs:pr-4'>
                    <img src={l01} alt="" className='xs:w-[40px]' />
                    <h1 className='xs:font-semibold xs:text-[16px] '>Individual/Corporate Savings Account</h1>
                    <p className='xs:text-xs xs:w-[150px] xs:text-[#6C7279]'>Our Savings account is design to provides principal security and a modest interest...</p>

                    <div className='xs:flex xs:space-x-2'>
                        <button className='xs:text-[#048950] xs:font-semibold xs:text-xs'>Learn More </button>
                        <div className='xs:text-[13px] xs:text-[#048950] xs:pt-1'>
                            <ArrowButtonRight />
                        </div>
                    </div>
                </div>

                <div className='xs:space-y-4 xs:border-[#6C7279] xs:border-l xs:pl-2 xs:w-[170px] xs:h-[190px] sd:w-[200px] sx:w-[200px] sg:w-[200px] lg:w-[200px]'>
                    <img src={l02} alt="" className='xs:w-[50px]' />
                    <h1 className='xs:font-semibold xs:text-[16px] '>Individual / Corporate Current Account</h1>
                    <p className='xs:text-xs xs:w-[170px] xs:text-[#6C7279]'>With Our Current Account, you have got it Wright. As this product is design...</p>

                    <div className='xs:flex xs:space-x-2'>
                        <button className='xs:text-[#048950] xs:font-semibold xs:text-xs'>Learn More </button>
                        <div className='xs:text-[13px] xs:text-[#048950] xs:pt-1'>
                            <ArrowButtonRight />
                        </div>
                    </div>
                </div>

                <div className='xs:space-y-3 xs:border-[#6C7279] xs:border-l xs:pl-2 xs:h-[208px] sd:w-[200px] sx:w-[200px] sg:w-[200px] lg:w-[200px] xs:mt-5'>
                    <img src={l04} alt="" className='xs:w-[50px]' />
                    <h1 className='xs:font-semibold xs:text-[16px] '>Co-Operative Group Account</h1>
                    <p className='xs:text-xs xs:w-[150px] xs:text-[#6C7279]'>Our Cooperative account is design to providing financial support to the grass root populist which compresses farmers, traders ...</p>

                    <div className='xs:flex xs:space-x-2'>
                        <button className='xs:text-[#048950] xs:font-semibold xs:text-xs'>Learn More </button>
                        <div className='xs:text-[13px] xs:text-[#048950] xs:pt-1'>
                            <ArrowButtonRight />
                        </div>
                    </div>
                </div>

                <div className='xs:space-y-3 xs:border-[#6C7279] xs:border-l xs:pl-2 xs:h-[200px] xs:mt-5'>
                    <img src={l05} alt="" className='xs:w-[50px]' />
                    <h1 className='xs:font-semibold xs:text-[16px] '>Xmas Saving Account</h1>
                    <p className='xs:text-xs xs:w-[170px] xs:text-[#6C7279] '>Our Xmas Savings account is design to encourage individual and families inculcate the habit of saving towards the yellowtail season with a competitive interest rate on savings...</p>

                    <div className='xs:flex xs:space-x-2'>
                        <button className='xs:text-[#048950] xs:font-semibold xs:text-xs'>Learn More </button>
                        <div className='xs:text-[13px] xs:text-[#048950] xs:pt-1'>
                            <ArrowButtonRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className='xs:bg-[#048950] xs:h-[1670px] lg:h-[700px] xs:pt-10 xs:mt-32'>
            <div className='xs:font-[sora] xs:text-white xs:text-center xs:p-[20px] xs:space-y-3 lg:w-[700px] lg:mx-auto'>
                <h1 className='xs:font-semibold'>WETLAND MICROFINANCE BANK EXPERIENCE IN MANAGEMENT OF PARTNERSHIP FUND</h1>
                <p className='xs:text-sm'>Wetland Microfinance Bank has been involved in different Micro-Credit programs sponsored by donor agencies aimed at reaching both those in accessible and ordinarily inaccessible areas of the Niger Delta areas of this country</p>
            </div>

            <div className='xs:block lg:flex lg:justify-evenly'>
                <div className=' xs:p-[20px] xs:rounded'>
                        <img src={card1} alt="card1" className='xs:h-[203px] lg:w-[251px] xs:mx-auto ' />

                    <div className='xs:text-white xs:font-[sora] xs:w-[250px] lg:w-[251px] xs:h-[210px] xs:mx-auto xs:px-[30px] xs:pt-3 xs:space-y-2 xs:bg-[#FFFFFF47] xs:rounded-b-[12px] xs:brightness-90  '>
                        <h1 className='xs:font-semibold'>Savings Account</h1>
                        <p className='xs:text-xs xs:font-extralight'>Wetland Microfinance bank started as Erikpo Community Bank in year 2000 and in 2005 following the transformation of community banks to Microfinance Bank and the subsequent policy on Microfinance, thus brought the present name (Wetland Microfinance Bank).</p>

                        <div className='xs:flex xs:space-x-2'>
                            <button className='xs:text-white xs:font-semibold xs:text-xs'>Learn More </button>
                            <div className='xs:text-[13px] xs:text-white xs:pt-1'>
                                <ArrowButtonRight />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' xs:p-[20px] xs:rounded'>
                        <img src={card2} alt="card1" className='xs:h-[203px] xs:mx-auto' />

                    <div className='xs:text-white xs:font-[sora] xs:w-[250px] xs:h-[210px] xs:mx-auto xs:px-[30px] xs:pt-3 xs:space-y-2 xs:bg-[#FFFFFF47] xs:rounded-b-[12px] xs:brightness-90 '>
                        <h1 className='xs:font-semibold'>Current Account</h1>
                        <p className='xs:text-xs xs:font-extralight'>Wetland Microfinance bank started as Erikpo Community Bank in year 2000 and in 2005 following the transformation of community banks to Microfinance Bank and the subsequent policy on Microfinance, thus brought the present name (Wetland Microfinance Bank).</p>

                        <div className='xs:flex xs:space-x-2'>
                            <button className='xs:text-white xs:font-semibold xs:text-xs'>Learn More </button>
                            <div className='xs:text-[13px] xs:text-white xs:pt-1'>
                                <ArrowButtonRight />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' xs:p-[20px] xs:rounded'>
                        <img src={card3} alt="card1" className='xs:h-[203px] xs:mx-auto' />

                    <div className='xs:text-white xs:font-[sora] xs:w-[250px] xs:h-[210px] xs:mx-auto xs:px-[30px] xs:pt-3 xs:space-y-2 xs:bg-[#FFFFFF47] xs:rounded-b-[12px] xs:brightness-90 '>
                        <h1 className='xs:font-semibold'>Fixed Deposit Account</h1>
                        <p className='xs:text-xs xs:font-extralight'>Wetland Microfinance bank started as Erikpo Community Bank in year 2000 and in 2005 following the transformation of community banks to Microfinance Bank and the subsequent policy on Microfinance, thus brought the present name (Wetland Microfinance Bank).</p>

                        <div className='xs:flex xs:space-x-2'>
                            <button className='xs:text-white xs:font-semibold xs:text-xs'>Learn More </button>
                            <div className='xs:text-[13px] xs:text-white xs:pt-1'>
                                <ArrowButtonRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='xs:bg-[#048950] xs:h-[260px] lg:w-[1100px] lg:mx-auto xs:text-center xs:mt-20 xs:text-white xs:font-[sora] xs:p-[25px] xs:space-y-3 xs:rounded-[10px] lg:space-y-10'>
            <h1 className='xs:font-semibold xs:text-[20px]'>Contact us</h1>
            <p className='xs:text-xs lg:w-[600px] lg:mx-auto'>Wetland Microfinance bank started as Erikpo Community Bank in year 2000 and in 2005 following the transformation of community banks to Microfinance Bank and the subsequent policy on Microfinance, thus brought the present name (Wetland Microfinance Bank).</p>
            <button className='xs:bg-white xs:text-[#048950] xs:text-xs xs:font-semibold xs:h-[40px] xs:w-[90px] xs:rounded '>send mail</button>
        </div>
    </div>
  )
}
