import React from 'react'
import hero from '../../assets/hero.png'
import viewers from '../../assets/viewers.png'
import partners from '../../assets/partners.png'

export const Hero = () => {
  return (
    <div>
        <div className="main-hero xs:block lg:flex lg:justify-between xs:mx-[40px]">
            <div className="hero-text xs:font-[sora] xs:space-y-7 xs:mt-10 lg:mt-16">
                <div>
                    <p className='xs:bg-[#ECFFF7] text-[#048950] xs:text-xs xs:w-[100px] xs:h-[30px] xs:rounded-full xs:py-2 xs:px-2.5 '>Digital Banking</p>
                </div>

                <div className=' xs:space-y-3'>
                    <h1 className='xs:font-semibold xs:text-[50px] lg:w-[400px]'>Money Management Made easy</h1>

                    <p className='xs:text-[#6C7279] xs:text-xs xs:w-[250px] xs:leading-6'>The ability to build systems that resist, absorb, recover from, or adapt to an adverse occurrence during operation that may cause hrm, destruction.</p>
                </div>

                <div className='xs:flex xs:h-[30px] xs:space-x-10 xs:text-[11px] lg:text-sm'>
                    <button className='xs:bg-[#048950] xs:rounded-[8px] xs:w-[100px] xs:h-[40px] lg:w-[140px] xs:text-white'>View Portfolio</button>
                    <img src={viewers} alt="viewers" className='xs:w-[153px]' />
                </div>
            </div>

            <div className="main-hero_img xs:mt-6 lg:w-[500px] lg:h-[500px]">
                <img src={hero} alt="hero" />
            </div>
        </div>

        <div className='main-hero_partners xs:bg-[#048950] xs:py-3 xs:mt-16'>
            <div className='xs:bg-[#239A67]'>
                <img src={partners} alt="partners" className='xs:mx-auto lg:mx-auto'/>
            </div>
        </div>
    </div>
  )
}
