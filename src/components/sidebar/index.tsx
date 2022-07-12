import shallow from 'zustand/shallow'

import Tab from './tab'
import './index.css'
import useStore from '../../store'

export default () => {
	const defaultPlaylists = useStore((state) =>
		state.defaultPlaylists.map(({ id, icon }) => ({ id, icon })),
	)
	const userPlaylists = useStore(
		(state) => state.userPlaylists.map(({ title, id }) => ({ title, id })),
		shallow,
	)
	return (
		<nav>
			<section>
				{defaultPlaylists.map(({ id, icon }) => (
					<Tab key={id} id={id} icon={icon} />
				))}
			</section>
			<section>
				{userPlaylists.map((playlist) => (
					<Tab key={playlist.id} id={playlist.id}>
						{playlist.title}
					</Tab>
				))}
			</section>
		</nav>
	)
}
