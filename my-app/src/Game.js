import { store } from './store'
import { Information, Field, ResetButton } from './components/index'
import { useState, useEffect } from 'react'
import styles from './app.module.css'

const GameLayout = ({
	currentPlayer,
	isDraw,
	field,
	handleChange,
	setField,
	setIsDraw,
}) => (
	<div className={styles.game}>
		<Information currentPlayer={currentPlayer} isDraw={isDraw} field={field} />
		<Field field={field} handleChange={handleChange} />
		<ResetButton setField={setField} setIsDraw={setIsDraw} />
	</div>
)

export const Game = () => {
	const [field, setField] = useState(store.getState().field)
	const { currentPlayer, isDraw } = store.getState()

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
		// setField(newField)
		store.dispatch({
			type: 'SET_TIC_TAC_TOE',
			payload: {
				field: newField,
			},
		})

		if (field.filter((el) => el.value === '').length === 0) {
			store.dispatch({
				type: 'GAME_IS_OVER',
				payload: {
					isGameEnded: true,
					isDraw: true,
				},
			})
		} else {
			return
		}
	}

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			field={field}
			handleChange={handleChange}
			setField={setField}
		/>
	)
}
