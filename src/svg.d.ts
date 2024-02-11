declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FunctionComponent<
		React.ComponentProps<'svg'> & { title?: string; className?: string }
	>
	export default ReactComponent
}
