import Content from '@components/admin/layout/content/Content'
import Header from '@components/admin/layout/header/Header'
import Sidebar from '@components/admin/layout/sidebar/Sidebar'
import s from './style.module.scss'

const Admin = () => {
	return (
		<div className={s.wrapper}>
			<Sidebar />

			<div className={s.content}>
				<Header />
				<Content />
			</div>
		</div>
	)
}

export default Admin
