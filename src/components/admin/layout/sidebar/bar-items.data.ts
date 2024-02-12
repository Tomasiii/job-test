import BagIcon from '@assets/admin/icons/Bag.svg?react'
import CategoryIcon from '@assets/admin/icons/Category.svg?react'
import ChartIcon from '@assets/admin/icons/Chart.svg?react'
import DiscountIcon from '@assets/admin/icons/Discount.svg?react'
import GameIcon from '@assets/admin/icons/Game.svg?react'
import ImageIcon from '@assets/admin/icons/Image.svg?react'
import MessageIcon from '@assets/admin/icons/Messages.svg?react'
import SettingIcon from '@assets/admin/icons/Settings.svg?react'
import UserIcon from '@assets/admin/icons/User.svg?react'

export const BAR_ITEMS = [
	{
		name: 'category',
		icon: CategoryIcon,
		title: 'Category',
		subItems: ['Some text', 'Some text', 'Some text'],
	},
	{
		name: 'chart',
		icon: ChartIcon,
		title: 'Chart',
		subItems: ['Some text', 'Some text', 'Some text'],
	},
	{
		name: 'game',
		icon: GameIcon,
		title: 'Game',
		subItems: ['App builder', 'App Customization', 'A/B Testing'],
	},
	{
		name: 'bag',
		icon: BagIcon,
		title: 'Store Management',
		subItems: ['Content Management', 'Product Management', 'Product Referral', 'Shops Management'],
	},
	{
		name: 'user',
		icon: UserIcon,
		title: 'User Management',
		subItems: ['Employee Management', 'Customer Management', 'Product Referral', 'Partner Management'],
	},
	{
		name: 'message',
		icon: MessageIcon,
		title: 'Communication',
		subItems: ['Chat', 'Notifications'],
	},
	{
		name: 'discount',
		icon: DiscountIcon,
		title: 'Discount',
		subItems: ['Some text', 'Some text', 'Some text'],
	},
	{
		name: 'image',
		icon: ImageIcon,
		title: 'Image',
		subItems: ['Some text', 'Some text', 'Some text'],
	},
	{
		name: 'setting',
		icon: SettingIcon,
		title: 'Setting',
		subItems: ['Some text', 'Some text', 'Some text'],
	},
]
