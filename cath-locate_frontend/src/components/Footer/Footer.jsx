import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='xs:mt-20 xs:font-[sora] xs:mx-[20px] xs:h-[650px] lg:h-[250px]'>
      <div className='xs:grid xs:grid-cols-2 xs:space-y-4 lg:flex lg:justify-around'>
        <div className='xs:pt-5 xs:space-y-4 lg:space-y-4'>
          <h1 className='xs:font-semibold'>Learn</h1>
          
          <div className='xs:text-xs xs:space-y-3 xs:text-[#6C7279]'>
          <p>Introduction</p>
          <p>Features</p>
          <p>Staking</p>
          <p>Get ATOM</p>
          <p>FAQ</p>
          </div>
        </div>

        <div className='xs:space-y-4'>
          <h1 className='xs:font-semibold'>Build</h1>
          
          <div className='xs:text-xs xs:space-y-3 xs:text-[#6C7279]'>
          <p>Starport</p>
          <p>Cosmos SDK</p>
          <p>Tools</p>
          <p>IBC Protocol</p>
          </div>
        </div>

        <div className='xs:space-y-4'>
          <h1 className='xs:font-semibold'>Explore</h1>
          
          <div className='xs:text-xs xs:space-y-3 xs:text-[#6C7279]'>
          <p>Tokens</p>
          <p>Ecosystem</p>
          <p>Wallets</p>
          <p>Gravity DEX</p>
          <p>Blog</p>
          </div>
        </div>

        <div className='xs:space-y-4'>
          <h1 className='xs:font-semibold'>Participate</h1>
          
          <div className='xs:text-xs xs:space-y-3 xs:text-[#6C7279]'>
          <p>Community</p>
          <p>Contributors</p>
          <p>Events</p>
          <p>Newsletters</p>
          </div>
        </div>

        <div className='xs:space-y-4'>
          <h1 className='xs:font-semibold'>Resources</h1>
          
          <div className='xs:text-xs xs:space-y-3 xs:text-[#6C7279] '>
          <p>About</p>
          <p>Press Kit</p>
          <p>Design</p>
          <p>Get Resources</p>
          </div>
        </div>
      </div>

     <div className='xs:space-y-3 lg:flex lg:justify-between lg:mx-[120px] xs:mt-10'>
        <div className="social-icons xs:flex xs:space-x-6 xs:text-[#2A2A2B]">
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
            <BsInstagram />
            <BsLinkedin /> 
            </div>

        <p className='xs:text-xs'>All Rights Reserved 2021 | Xircus Pte. Ltd</p>
     </div>

    </div>
  )
}
