import { Information, Field, ResetButton } from './components/index'

export const Game = () => {
	return (
		<div className="text-center">
			<Information />
			<Field />
			<ResetButton />
		</div>
	)
}
