import { Information, Field, ResetButton } from './components/index'
import styles from './app.module.css'

export const Game = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<ResetButton />
		</div>
	)
}
