import { useSelector } from 'react-redux'
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectWinner,
	selectIsDraw,
} from '../../selectors'

import styles from './information.module.css'

export const Information = () => {
	const winner = useSelector(selectWinner)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const isGameEnded = useSelector(selectIsGameEnded)
	const isDraw = useSelector(selectIsDraw)

	return (
		<>
			<div className={styles.field}>
				{isDraw
					? 'Ничья\nКонец игры!'
					: isGameEnded
					? `Победа: ${winner}\nКонец игры!`
					: `Ходит: ${currentPlayer}`}
			</div>
		</>
	)
}
