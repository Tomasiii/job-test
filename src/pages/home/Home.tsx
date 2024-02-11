import { Link } from 'react-router-dom'
import { URL } from '@data/url/URL'
import s from './style.module.scss'

interface Props {}

const Home = ({}: Props) => {
	return (
		<section>
			<h1>Home</h1>
			<br />

			<Link to={URL.ADMIN}>Admin</Link>
			<br />
			<br />

			<Link to={URL.HOVER_OVERVIEW}>HOVER_ANIMATION</Link>
			<br />
			<br />

			<Link to={URL.GRAPHIC_ANIMATION}>GRAPHIC_ANIMATION</Link>
		</section>
	)
}

export default Home
