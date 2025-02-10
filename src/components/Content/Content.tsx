import styles from './Content.module.scss'
import { Form } from './Form/Form'
import { SubHeader } from './SubHeader/SubHeader'
export function Content() {
	return (
		<div className={styles.content}>
			<SubHeader />
			<Form />
		</div>
	)
}
