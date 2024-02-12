import cn from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GreenBox from '@assets/hover-animation/green_box.png'
import GreenShadow from '@assets/hover-animation/green_shadow.png'
import PinkBox from '@assets/hover-animation/pink_box.png'
import PinkShadow from '@assets/hover-animation/pink_shadow.png'
import PurpleBox from '@assets/hover-animation/purple_box.png'
import PurpleShadow from '@assets/hover-animation/purple_shadow.png'
import { URL } from '@data/url/URL'
import s from './style.module.scss'

const HoverOverview = () => {
	const navigate = useNavigate()
	const [showSlider, setShowSlider] = useState(false)

	const seeAllProducts = () => {
		setShowSlider(true)
		setTimeout(() => navigate(URL.HOVER_SLIDER), 400)
	}

	return (
		<section className={cn(s.container, { [s.fadeOutAnimation]: showSlider })}>
			<div className={s.boxes}>
				<div className={cn(s.box, s.green)}>
					<img src={GreenBox} alt="beauty box" />
					<img src={GreenShadow} className={s.shadow} alt="beauty box" />
				</div>
				<div className={cn(s.box, s.purple)}>
					<img src={PurpleBox} alt="beauty box" />
					<img src={PurpleShadow} className={s.shadow} alt="beauty box" />
				</div>
				<div className={cn(s.box, s.pink)}>
					<img src={PinkBox} alt="beauty box" />
					<img src={PinkShadow} className={s.shadow} alt="beauty box" />
				</div>
			</div>

			<div className={s.btn}>
				<button onClick={seeAllProducts}>See all products</button>
			</div>
		</section>
	)
}

export default HoverOverview
