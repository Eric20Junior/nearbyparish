import {React, useContext, useState} from 'react'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigations'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout, HiMenu } from 'react-icons/hi'
import { AuthContext } from '../../../context/AuthContext';

const classLinks = 'xs:flex xs:items-center xs:gap-2 xs:font-light xs:px-3 xs:py-2 xs:hover:bg-neutral-700 xs:hover:no-underline xs:active:bg-neutral-600 xs:rounded-sm xs:text-base'
export const Sidebar = () => {
  const { logoutAdmin } = useContext(AuthContext)
  
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => {
    setOpen(!open)
  }
  return (
    <div>
        <div style={{width: open ? '140px' : '100px'}} className='xs:flex xs:h-full lg:h-screen xs:flex-col xs:bg-neutral-900 xs:w-10 xs:p-3 xs:font-[sora] xs:duration-700  '>
                
                <div className='xs:flex-1'>
                  <div className='xs:px-3'>
                      <HiMenu fontSize={30} className='xs:w-[40px] xs:pr-[15px] xs:cursor-pointer text-white xs:duration-700 ' onClick={toggleSidebar} />
                  </div>
                      
                    <div className='xs:flex xs:p-3 xs:space-x-3'>
                        <h1 style={{display: open ? 'block' : 'none'}} className='xs:py-2 xs:text-white xs:duration-700 '>Menu</h1>
        
                        
                    </div>
        
        
                    <div className='xs:flex-1 xs:gap-0.5 xs:duration-700 '>
                      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                            <SidebarLink key={item.key} item={item} open={open} />
                          ))}
                    </div>
                </div> 
                <div className='xs:flex xs:flex-col xs:gap-0.5 xs:pt-2 xs:border-t xs:border-neutral-700 xs:duration-700'>
                  {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} open={open}/>
                  ))}
        
                  <div onClick={logoutAdmin} className='xs:text-red-500 xs:cursor-pointer xs:text-[30px] xs:px-3 xs:flex xs:space-x-1 xs:pt-2'>
                          <span ><HiOutlineLogout/></span>
                          <span style={{display: open ? 'block' : 'none'}} className='xs:text-[16px]'>Logout</span>
                        </div> 
                </div>
            </div>
    </div>
  )
}

function SidebarLink({ item, open }) {

  const {pathname} = useLocation()
  
  return (

    
    <Link to={item.path} className={classNames(pathname === item.path ? 'xs:text-white' : 'xs:text-neutral-400 xs:duration-700 ', classLinks)}>
        <span className='xs:text-[25px]'>{item.icon}</span>
      <div style={{display: open ? 'block' : 'none'}} className='xs:duration-700'>
        {item.label}
      </div>
      </Link>
  )
}