import { useSelector } from 'react-redux'
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectWinner,
	selectIsDraw,
} from '../../selectors'

export const Information = () => {
	const winner = useSelector(selectWinner)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const isGameEnded = useSelector(selectIsGameEnded)
	const isDraw = useSelector(selectIsDraw)

	return (
		<>
			<div className="text-4xl font-semibold my-30">
				{isDraw
					? 'Ничья\nКонец игры!'
					: isGameEnded
					? `Победа: ${winner}\nКонец игры!`
					: `Ходит: ${currentPlayer}`}
			</div>
		</>
	)
}
