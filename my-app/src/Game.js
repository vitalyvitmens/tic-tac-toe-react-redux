import { store } from './store'
import { Information, Field, ResetButton } from './components/index'
import { useState, useEffect } from 'react'
import styles from './app.module.css'

const { currentPlayer, isDraw, field } = store.getState()

const GameLayout = ({ handleChange, setField }) => (
	<div className={styles.game}>
		<Information currentPlayer={currentPlayer} isDraw={isDraw} field={field} />
		<Field field={field} handleChange={handleChange} />
		<ResetButton setField={setField} />
	</div>
)

export const Game = () => {
	const [field, setField] = useState(store.getState().field)
	const { currentPlayer, isDraw, isGameEnded } = store.getState()
	console.log('currentPlayer:', currentPlayer)
	console.log('isGameEnded:', isGameEnded)
	console.log('isDraw:', isDraw)

	useEffect(() => {
		store.subscribe(() => {
			setField(store.getState().field)
		})
	})

	const handleChange = (index) => {
		currentPlayer === 'X'
			? store.dispatch({
					type: 'SET_TIC_TAC_TOE',
					payload: {
						currentPlayer: 'O',
					},
			  })
			: store.dispatch({
					type: 'SET_TIC_TAC_TOE',
					payload: {
						currentPlayer: 'X',
					},
			  })
		const newField = [...field]
		newField[index].value = currentPlayer
		store.dispatch({
			type: 'SET_TIC_TAC_TOE',
			payload: {
				field: [...field],
			},
		})

		if (field.filter((el) => el.value === '').length === 0) {
			store.dispatch({ type: 'IS_DRAW' })
		} else {
			return
		}
	}

	return <GameLayout handleChange={handleChange} setField={setField} />
}
