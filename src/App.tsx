import { Navigate, Route, Routes } from 'react-router-dom'
import Admin from '@pages/admin/Admin'
import GraphicAnimation from '@pages/graphic-animation/GraphicAnimation'
import MorphSvg from '@pages/graphic-animation/morph-svg/MorphSvg'
import Home from '@pages/home/Home'
import HoverOverview from '@pages/hover-animation/overview/HoverOverview'
import HoverSlider from '@pages/hover-animation/slider/HoverSlider'
import '@styles/global.scss'
import { URL } from '@data/url/URL'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path={URL.ADMIN} element={<Admin />} />
			<Route path={URL.HOVER_OVERVIEW} element={<HoverOverview />} />
			<Route path={URL.HOVER_SLIDER} element={<HoverSlider />} />
			<Route path={URL.GRAPHIC_ANIMATION} element={<GraphicAnimation />} />
			<Route path={URL.GRAPHIC_ANIMATION_MORPH_SVG} element={<MorphSvg />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}

export default App
