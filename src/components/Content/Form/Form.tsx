import { useState } from 'react'
import Add from '../../../images/add.svg?react'
import Calendar from '../../../images/calendar.svg?react'
import Cancel from '../../../images/cancel.svg?react'
import Close from '../../../images/close.svg?react'
import Search from '../../../images/search.svg?react'
import { IconButton } from '../../IconButton/IconButton'
import { IModal } from '../../Modal/Modal.types'
import styles from './Form.module.scss'
import { items } from './data'

export function Form({ isModal = false }: IModal) {
	const [inputValues, setInputValues] = useState(items.map(item => item.value))

	const handleInputChange = (title: number, value: string) => {
		const newInputValues = [...inputValues]
		newInputValues[title] = value
		setInputValues(newInputValues)
	}

	const handleRemoveBadge = (index: number, badgeIndex: number) => {
		const newInputValues = [...inputValues]
		if (Array.isArray(newInputValues[index])) {
			newInputValues[index] = newInputValues[index].filter(
				(_, i) => i !== badgeIndex
			)
		}
		setInputValues(newInputValues)
	}

	return (
		<div className={styles.form}>
			<h4 className={styles.formTitle}>
				{!isModal
					? 'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
					: 'Новая запись'}
			</h4>
			<ul className={`${styles.formList}  ${isModal && styles.modal}`}>
				{items.map((item, index) => (
					<li
						key={item.title}
						className={`${styles.formItem} ${item.width && styles.width}`}
					>
						<div className={styles.inputTitle}>
							{item.title}
							<div className={styles.inputGroup}>
								<div
									className={`${styles.inputContainer} ${
										item.add && styles.badges
									}`}
								>
									{item.add ? (
										<div className={styles.badgesContainer}>
											{Array.isArray(inputValues[index]) &&
												inputValues[index].map((badge, i) => (
													<span
														key={i}
														className={`${styles.badge} ${
															item.title === 'Согласующие' && styles.close
														}`}
													>
														{badge}
														{item.title === 'Согласующие' && (
															<IconButton
																Icon={Close}
																onClick={() => handleRemoveBadge(index, i)}
																className={styles.closeButton}
															/>
														)}
													</span>
												))}
										</div>
									) : (
										<input
											type='text'
											value={inputValues[index]}
											onChange={e => handleInputChange(index, e.target.value)}
											className={styles.input}
										/>
									)}
									{inputValues[index] && (
										<IconButton
											Icon={Cancel}
											onClick={() => handleInputChange(index, '')}
										/>
									)}
								</div>
								{item.calendar && (
									<IconButton Icon={Calendar} className={styles.formButton} />
								)}
								{item.add && (
									<IconButton Icon={Add} className={styles.formButton} />
								)}
								{item.search && (
									<IconButton Icon={Search} className={styles.formButton} />
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
