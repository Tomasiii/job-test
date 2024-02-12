import cn from 'classnames'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import GreenBox from '@assets/hover-animation/green_box.png'
import PinkBox from '@assets/hover-animation/pink_box.png'
import PurpleBox from '@assets/hover-animation/purple_box.png'
import './styles.css'

const SLIDES = [
	{ img: GreenBox, bg: '#EBFFFC' },
	{ img: PurpleBox, bg: '#EFF2FF' },
	{ img: PinkBox, bg: '#F6E1EE' },
]

const HoverSlider = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	return (
		<Swiper
			slidesPerView="auto"
			centeredSlides={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			onSlideChange={swiper => setActiveSlideIndex(swiper.activeIndex)}
			style={{ background: SLIDES[activeSlideIndex].bg }}
			speed={850}
			grabCursor
		>
			{SLIDES.map((item, i) => {
				return (
					<SwiperSlide className={cn({ activeSlide: i === activeSlideIndex })} key={i}>
						<img src={item.img} alt="beauty box" />
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default HoverSlider
