import { useState } from 'react'
import avatar from '../../images/avatar.png'
import Cancel from '../../images/cancel.svg?react'
import logo from '../../images/logo.svg'
import Search from '../../images/search.svg?react'
import Setting from '../../images/setting.svg?react'
import { IconButton } from '../IconButton/IconButton'
import { Tabs } from '../Navigator/Tabs/Tabs'
import styles from './Header.module.scss'

export function Header() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<header className={styles.header}>
			<Tabs className={styles.tabs} headerIcon={true} />
			<a href='/' className={styles.logo}>
				<img src={logo} alt='Логотип SimpleOne' className={styles.logoImage} />
			</a>
			<form className={styles.search}>
				<input
					type='search'
					placeholder='Поиск'
					className={styles.searchInput}
					value={searchValue}
					onInput={e => setSearchValue(e.currentTarget.value)}
				/>
				<IconButton Icon={Search} className={styles.searchIcon} />
				{searchValue && (
					<IconButton Icon={Cancel} onClick={() => setSearchValue('')} />
				)}
			</form>
			<div className={styles.userContainer}>
				<img src={avatar} alt='Аватар пользователя' className={styles.avatar} />
				<span className={styles.username}>Максим Галактионов</span>
				<IconButton Icon={Setting} className={styles.settingButton} />
			</div>
		</header>
	)
}
