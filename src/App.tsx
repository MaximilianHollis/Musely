import './App.css'
import Sidebar from './components/sidebar'
import Song from './components/song'
import Overlay from './components/overlay'

export default () => (
	// Const playlist = useStore((state) => state.currentPlaylist)

	<div className="App">
		<Sidebar />
		<div className="Container">
			<Song />
			<Song />
			<Song />
			<Song />
			<Song />
		</div>
		<Overlay />
	</div>
)
