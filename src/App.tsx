/// <reference types="vite-plugin-svgr/client" />
import styles from './App.module.scss'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { Navigator } from './components/Navigator/Navigator'

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<Navigator />
				<Content />
			</main>
		</div>
	)
}

export default App
