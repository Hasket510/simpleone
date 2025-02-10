import { useEffect, useRef, useState } from 'react'
import { Modal } from '../../Modal/Modal'
import styles from './SubHeader.module.scss'

export function SubHeader() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const sentinelRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const sentinel = sentinelRef.current
		if (!sentinel) return

		const observer = new IntersectionObserver(([entry]) => {
			setIsScrolled(!entry.isIntersecting)
		})

		if (sentinel) {
			observer.observe(sentinel)
		}

		return () => {
			if (sentinel) {
				observer.unobserve(sentinel)
			}
		}
	}, [sentinelRef])

	return (
		<>
			<div ref={sentinelRef} />
			<div className={`${styles.subHeader} ${isScrolled && styles.scrolled}`}>
				<div className={styles.subHeaderLeft}>
					<h3 className={styles.subHeaderTitle}>Подзадача</h3>
					<button
						className={styles.subHeaderButton}
						onClick={() => setIsModalOpen(true)}
					>
						Создать
					</button>
				</div>
				<div className={styles.subHeaderRight}>
					<button className={`${styles.subHeaderButton} ${styles.saveButton}`}>
						Сохранить
					</button>
					<button className={styles.subHeaderButton}>Сохранить и выйти</button>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	)
}
