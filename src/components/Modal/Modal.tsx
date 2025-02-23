import { useCallback, useEffect } from 'react'
import Close from '../../images/close.svg?react'
import { Form } from '../Content/Form/Form'
import { IconButton } from '../IconButton/IconButton'
import styles from './Modal.module.scss'
import { IModalProps } from './Modal.types'
export function Modal({ isOpen, onClose }: IModalProps) {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	const handleClickOutside = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (e.target === e.currentTarget) onClose()
		},
		[onClose]
	)

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown)
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, handleKeyDown])

	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={handleClickOutside}>
			<div className={styles.modalContainer}>
				<div className={styles.subHeader}>
					<div className={styles.subHeaderLeft}>
						<h3 className={styles.subHeaderTitle}>Подзадача</h3>
					</div>
					<div className={styles.subHeaderRight}>
						<button
							className={`${styles.subHeaderButton} ${styles.saveButton}`}
						>
							Сохранить
						</button>
						<button className={styles.subHeaderButton} onClick={onClose}>
							Отменить
						</button>
						<IconButton
							Icon={Close}
							onClick={onClose}
							className={styles.closeButton}
						/>
					</div>
				</div>
				<Form isModal={true} />
				<div className={styles.modalFooterButtons}>
					<button
						className={`${styles.modalFooterButton} ${styles.saveButton}`}
					>
						Сохранить
					</button>
					<button className={styles.modalFooterButton} onClick={onClose}>
						Отменить
					</button>
				</div>
			</div>
		</div>
	)
}
