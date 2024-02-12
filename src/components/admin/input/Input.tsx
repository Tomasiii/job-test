import SearchSvg from '@assets/admin/icons/Search.svg?react'
import s from './style.module.scss'

const Input = () => {
	return (
		<div className={s.input}>
			<SearchSvg />
			<input type="search" placeholder="Search for the desired information" />
		</div>
	)
}
export default Input
