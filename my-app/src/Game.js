import { store } from './store'
import { Information, Field, ResetButton } from './components/index'
import { useState, useEffect } from 'react'
import styles from './app.module.css'

export const Game = () => {
	const [field, setField] = useState(store.getState().field)

	useEffect(() => {
		store.subscribe(() => {
			setField(store.getState().field)
		})
	}, [field])

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<ResetButton />
		</div>
	)
}
