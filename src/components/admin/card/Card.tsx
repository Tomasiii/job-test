import { motion } from 'framer-motion'
import ArrowIcon from '@assets/admin/icons/ChevronDown.svg?react'
import DeleteIcon from '@assets/admin/icons/Delete.svg?react'
import DragIcon from '@assets/admin/icons/Dots.svg?react'
import EditIcon from '@assets/admin/icons/Edit.svg?react'
import FolderIcon from '@assets/admin/icons/Folder.svg?react'
import PlusIcon from '@assets/admin/icons/Plus.svg?react'
import s from './style.module.scss'

interface Props {
	articleName: string
}

const Card = ({ articleName }: Props) => {
	return (
		<motion.div layout className={s.wrapper}>
			<div className={s.header}>
				<div className={s.header__title}>
					<div className={s.iconsWrapper}>
						<ArrowIcon />
						<FolderIcon />
					</div>
					New Collection
				</div>
				<div className={s.actions}>
					<DeleteIcon /> <EditIcon />
				</div>
			</div>

			<div className={s.articleItem}>
				<div className={s.article}>
					<DragIcon />
					{articleName}
				</div>
				<div className={s.articleActions}>
					<DeleteIcon /> <EditIcon />
				</div>
			</div>

			<div className={s.addCollection}>
				<span className={s.addCollectionButton}>
					Add New Collection <PlusIcon />
				</span>
				<p>Drag treeNode to insert after the other treeNode.</p>
			</div>
		</motion.div>
	)
}

export default Card
