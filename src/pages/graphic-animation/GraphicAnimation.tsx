import MorphSvg from '@pages/graphic-animation/morph-svg/MorphSvg'

interface Props {}

const GraphicAnimation = ({}: Props) => {
	return (
		<section style={{ padding: 20 }}>
			<MorphSvg />
			<br />
			<br />

			<h2>
				I started morphing svg - path - "d", but the value of "d" required normalization (because now the transformation
				doesn't look good). Recognizing the substantial time commitment this adjustment would entail, I decided to halt
				this task.
				<br />
				<br />
				Alternatively, one could achieve a similar effect by alternating images using CSS opacity + transform:scale.
				However, considering the task is specifically labeled "Graphic Animation," I refrained from employing this
				method.
			</h2>
		</section>
	)
}

export default GraphicAnimation
