import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
import { BAR_ITEMS } from '@components/admin/layout/sidebar/bar-items.data'
import { setSidebarOpen } from '@store/admin'
import InfoIcon from '@assets/admin/icons/Info.svg?react'
import LogoIcon from '@assets/admin/logo/Logo.svg?react'
import s from './sidebar.module.scss'

interface SideBarItem {
	name: string
	title?: string
	subItems?: string[]
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Sidebar = () => {
	const [tab, setTab] = useState<SideBarItem | null>(null)

	const handleTab = (item: SideBarItem) => {
		setTab(prev => {
			if (prev && prev.name === item.name) {
				setSidebarOpen(false)
				return null
			} else {
				setSidebarOpen(true)
				return item
			}
		})
	}

	const styles = useSpring({
		opacity: tab ? 1 : 0,
		transform: tab ? 'translateX(0%)' : 'translateX(-100%)',
	})

	return (
		<>
			<div className={s.sidebar}>
				<div className={s.logo}>
					<LogoIcon />
				</div>

				<div className={s.sidebar__items}>
					{BAR_ITEMS.map(item => (
						<div key={item.name} onClick={() => handleTab(item)} className={item.name === tab?.name ? s.selected : ''}>
							<item.icon />
						</div>
					))}
				</div>
				<div className={s.info}>
					<InfoIcon />

					<span className={s.info__version}>1.01</span>
				</div>
			</div>

			{tab && (
				<animated.div style={styles} className={s.menu}>
					<div className={s.menu__header}>
						commerce <br /> flow
					</div>
					<div className={s.menu__title}>{tab.title}</div>
					<div className={s.menu__items}>
						{tab.subItems?.map((subItem, subIndex) => (
							<div key={subIndex} className={s.expandedMenuitem}>
								{subItem}
							</div>
						))}
						<div className={s.info}>
							Help Started
							<span className={s.version}>Version . 1.00.0.2</span>
						</div>
					</div>
				</animated.div>
			)}
		</>
	)
}

export default Sidebar
