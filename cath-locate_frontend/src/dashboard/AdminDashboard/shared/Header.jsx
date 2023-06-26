import React, {Fragment, useState} from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import {Popover, Transition} from '@headlessui/react'
// import { Menu } from '@headlessui/react'
import classNames from 'classnames';
// import logo from "../../../assets/wetland_n 1.png";


export const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  
  return (
    <div className='xs:bg-white xs:h-16 xs:px-4 xs:flex xs:justify-between xs:items-center xs:border xs:border-gray-200'>
        <div className='xs:relative'>
            <HiOutlineSearch className='xs:text-gray-400 xs:absolute xs:top-1/2 xs:-translate-y-1/2 xs:left-3'/>
            <input type="text" name="search" 
            onChange={handleSearch}
            placeholder='Search...' className='xs:text-sm xs:focus:outline-none xs:active:outline-none xs:h-10 xs:w-[130px] lg:w-[240px] xs:border border-gray-300 xs:px-4 xs:rounded-sm xs:pl-10 xs:pr-4 ' />
            
        </div>

        <div className='xs:flex xs:items-center xs:gap-1'>
            <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                className={classNames(
                    open && 'xs:bg-gray-200',
                    'xs:inline-flex xs:items-center xs:text-gray-700 xs:hover:text-opacity-100 focus:outline-none active:bg-gray-100 xs:p-1.5 xs;rounded-sm')}>
                    <HiOutlineChatAlt/>
                </Popover.Button>
                <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='xs:absolute xs:right-0 xs:z-10 xs:mt-2.5 xs:w-48 lg:w-80'>
                <div className='xs:bg-white xs:rounded-sm xs:shadow-md xs:ring-1 xs:ring-black xs:ring-opacity-5 xs:px-2 xs:py-2.5'>
                   
                    No Messages
                </div>
              </Popover.Panel>
              </Transition>
            </> 
            )}
            </Popover>


            <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                className={classNames(
                    open && 'xs:bg-gray-200',
                    'xs:inline-flex xs:items-center xs:text-gray-700 xs:hover:text-opacity-100 focus:outline-none active:bg-gray-100 xs:p-1.5 xs;rounded-sm')}>
                    <HiOutlineBell/>
                </Popover.Button>
                <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='xs:absolute xs:right-0 xs:z-10 xs:mt-2.5 xs:w-48 lg:w-80'>
                <div className='xs:bg-white xs:rounded-sm xs:shadow-md xs:ring-1 xs:ring-black xs:ring-opacity-5 xs:px-2 xs:py-2.5'>
                   
                    No Notifications
                </div>
              </Popover.Panel>
              </Transition>
            </> 
            )}
            </Popover>


            {/* <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="xs:inline-flex xs:focus:outline-none xs:focus:ring-2 xs:focus:ring-neutral-400 xs:rounded-full">
            <div>
                <img src={logo} alt="" className='xs:w-[30px] xs:rounded-full' />
                <span className='xs:sr-only'>Eric Junior</span>
            </div>
          </Menu.Button>
        </div>
        </Menu> */}
                
        </div>
    </div>
  )
}
