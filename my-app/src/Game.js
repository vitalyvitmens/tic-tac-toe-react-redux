import { store } from './store'
import { useState, useEffect } from 'react'
import { Information, Field, ResetButton } from './components/index'
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
