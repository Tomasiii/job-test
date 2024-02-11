import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import GreenBox from '@assets/hover-animation/green_box.png'
import PinkBox from '@assets/hover-animation/pink_box.png'
import PurpleBox from '@assets/hover-animation/purple_box.png'
import { URL } from '@data/url/URL'
import s from './style.module.scss'

const HoverOverview = () => {
	const navigate = useNavigate()

	return (
		<section className={s.container}>
			<div className={s.boxes}>
				<div className={cn(s.box, s.green)}>
					<img src={GreenBox} alt="beauty box" />
				</div>
				<div className={cn(s.box, s.purple)}>
					<img src={PurpleBox} alt="beauty box" />
				</div>
				<div className={cn(s.box, s.pink)}>
					<img src={PinkBox} alt="beauty box" />
				</div>
			</div>

			<div>
				<button onClick={() => navigate(URL.HOVER_SLIDER)}>See all products</button>
			</div>
		</section>
	)
}

export default HoverOverview
