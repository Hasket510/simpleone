import { Filter } from './Filter/Filter'
import { Menu } from './Menu/Menu'
import styles from './Navigator.module.scss'
import { Tabs } from './Tabs/Tabs'
export function Navigator() {
	return (
		<div className={styles.navigator}>
			<Tabs />
			<div className={styles.menuContainer}>
				<Filter />
				<Menu />
			</div>
		</div>
	)
}
