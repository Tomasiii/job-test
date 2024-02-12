import ProfileImg from '@assets/admin/img/people/alex.png'
import s from './style.module.scss'

const User = () => {
	return (
		<div className={s.user}>
			<div className={s.info}>
				<span className={s.name}>Alex Kognitiv</span>
				<span className={s.email}>Alexkognitiv@gmail.com</span>
			</div>

			<img className={s.img} src={ProfileImg} alt="User Image" />
		</div>
	)
}

export default User
