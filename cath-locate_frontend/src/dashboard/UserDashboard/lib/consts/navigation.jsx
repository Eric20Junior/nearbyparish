import {
	HiOutlineViewGrid,
	HiOutlineCog
} from 'react-icons/hi'

import { BiChurch, BiSupport } from 'react-icons/bi'
import { ImProfile } from 'react-icons/im'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '#',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'churches',
		label: 'Churches',
		path: '#',
		icon: <BiChurch />
	},
	{
		key: 'ChurchProfile',
		label: 'Church Profile',
		path: '/dashboard/profile',
		icon: <ImProfile />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [

	{
		key: 'support',
		label: 'Support Page',
		path: '/support',
		icon: <BiSupport />
	}
]