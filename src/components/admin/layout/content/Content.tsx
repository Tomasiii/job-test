import { useStore } from 'effector-react'
import Card from '@components/admin/card/Card'
import { $isSidebarOpen } from '@store/admin'
import PlusSvg from '@assets/admin/icons/Plus.svg?react'
import s from './style.module.scss'

const Content = () => {
	const isSidebarOpen = useStore($isSidebarOpen)

	const cards = Array.from({ length: 6 }).map(() => ({ name: 'July Articles' }))

	return (
		<div className={s.wrapper}>
			<div className={s.top}>
				<div className={s.titleContainer}>
					<span className={s.title}>Manage Category Page</span>
					<span className={s.subtitle}>Is simply dummy text of the printing and typesetting industry.</span>
				</div>

				<button className={s.createBtn}>
					<PlusSvg /> Create New Category
				</button>
			</div>

			<div className={s.cards} data-sidebar-open={isSidebarOpen}>
				{cards.map((card, i) => (
					<Card key={i} articleName={card.name} />
				))}
			</div>
		</div>
	)
}

export default Content
