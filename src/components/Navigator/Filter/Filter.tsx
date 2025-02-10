import { useState } from 'react'
import Cancel from '../../../images/cancel.svg?react'
import FilterPic from '../../../images/filter.svg?react'
import Pushpin from '../../../images/pushpin.svg?react'
import { IconButton } from '../../IconButton/IconButton'
import styles from './Filter.module.scss'
export function Filter() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<div className={styles.filterContainer}>
			<form className={styles.filter}>
				<input
					type='filter'
					placeholder='Поиск по меню'
					className={styles.filterInput}
					value={searchValue}
					onInput={e => setSearchValue(e.currentTarget.value)}
				/>
				<IconButton Icon={FilterPic} className={styles.filterButton} />
				{searchValue && (
					<IconButton Icon={Cancel} onClick={() => setSearchValue('')} />
				)}
			</form>
			<IconButton Icon={Pushpin} className={styles.pushpinButton} />
		</div>
	)
}
