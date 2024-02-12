import Input from '@components/admin/input/Input'
import User from '@components/admin/user/User'
import s from './style.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<Input />
			<User />
		</header>
	)
}

export default Header
