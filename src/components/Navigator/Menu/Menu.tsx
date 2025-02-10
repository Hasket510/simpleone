import Arrow from '../../../images/arrow.svg?react'
import styles from './Menu.module.scss'
export function Menu() {
	const menu = [
		'Моя работа',
		'Структура портала',
		'Личное расписание',
		'Отсутствие на рабочем месте',
		'Портфель услуг',
		'Дашборды',
		'Доски задач',
		'Обращения',
		'События',
		'Инциденты',
		'Проблемы',
		'Настройка каталогов',
		'Запросы на обслуживание',
		'Запросы на изменение',
		'Управление конфигурациями',
		'Управление уровнем услуг',
		'Настройка соответствий',
	]
	return (
		<ul className={styles.menuList}>
			{menu.map(item => (
				<li key={item} className={styles.menuItem}>
					<Arrow className={styles.arrow} />
					{item}
				</li>
			))}
		</ul>
	)
}
