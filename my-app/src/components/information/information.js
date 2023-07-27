import { store } from '../../store'
import styles from './information.module.css'

export const Information = () => {
	const { winner, currentPlayer, isGameEnded, isDraw } = store.getState()

	return (
		<div className={styles.field}>
			<div>{isDraw ? 'Ничья' : null}</div>
			<div>{!isDraw && isGameEnded ? `Победа: ${winner}` : null}</div>
			<div>{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}</div>
			<div>{isGameEnded ? 'Конец игры!' : null}</div>
		</div>
	)
}
