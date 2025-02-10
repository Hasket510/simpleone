import { useState } from 'react'
import Sidebar from '../../../images/sidebar.svg?react'
import Star from '../../../images/star.svg?react'
import styles from './Tabs.module.scss'
import { ITabsProps } from './Tabs.types'

export function Tabs({ className, headerIcon = false }: ITabsProps) {
	const [activeTab, setActiveTab] = useState('sidebar')
	const tabs = headerIcon
		? [{ id: 'sidebar', icon: <Sidebar className={styles.tabIcon} /> }]
		: [
				{ id: 'sidebar', icon: <Sidebar className={styles.tabIcon} /> },
				{ id: 'star', icon: <Star className={styles.tabIcon} /> },
		  ]

	return (
		<ul className={`${styles.tabs} ${className}`}>
			{tabs.map(tab => (
				<li
					key={tab.id}
					className={`${styles.tabItem} ${
						activeTab === tab.id && styles.active
					}`}
				>
					<button
						className={styles.tabButton}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.icon}
					</button>
				</li>
			))}
		</ul>
	)
}
