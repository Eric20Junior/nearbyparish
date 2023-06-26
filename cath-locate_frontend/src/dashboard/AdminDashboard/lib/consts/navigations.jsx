import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineCog,
	HiQuestionMarkCircle
} from 'react-icons/hi'


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'churches',
		label: 'Churches',
		path: '/admin/churches',
		icon: <HiOutlineCube />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/admin/users',
		icon: <HiOutlineUsers />
	},
	{
		key: 'faq',
		label: 'FAQ',
		path: '/admin/faq',
		icon: <HiQuestionMarkCircle />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Support Page',
		path: '/suport',
		icon: <HiOutlineCog />
	},
	{
		key: 'faq',
		label: 'FAQ',
		path: '/faq',
		icon: <HiOutlineCog />
	}
]