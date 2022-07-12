import styles from './App.module.css'
import Sidebar from './components/sidebar'
import Song from './components/song'
import Overlay from './components/overlay'

export default () => (
	// Const playlist = useStore((state) => state.currentPlaylist)

	<div className={styles.app}>
		<Sidebar />
		<div className={styles.container}>
			<Song />
			<Song />
			<Song />
			<Song />
			<Song />
		</div>
		<Overlay />
	</div>
)
