import { Information, Field, ResetButton } from './components/index'
import styles from './app.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

const GameLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	handleChange,
	setField,
	setIsDraw,
	setIsGameEnded,
}) => (
	<div className={styles.game}>
		<Information
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
		/>
		<Field
			field={field}
			handleChange={handleChange}
			isGameEnded={isGameEnded}
		/>
		<ResetButton
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	</div>
)

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleChange: PropTypes.func,
	setField: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
}

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
	])

	const handleChange = (index) => {
		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
		const newField = [...field]
		newField[index].value = currentPlayer
		setField(newField)
		if (field.filter((el) => el.value === '').length === 0) {
			setIsDraw(true)
			setIsGameEnded(true)
		} else {
			return
		}
	}

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			handleChange={handleChange}
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	)
}
