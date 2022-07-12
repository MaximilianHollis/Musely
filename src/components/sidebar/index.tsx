import shallow from 'zustand/shallow'
import {
	TbStar,
	TbMusic,
	TbQuestionMark,
	TbPlus,
	TbClock,
} from 'react-icons/tb'
import Tab from './tab'
import './index.css'
import useStore from '../../store'

export default () => {
	const defaultPlaylists = [
		{
			id: 'Favorite Songs',
			songs: [],
			icon: <TbStar />,
		},
		{
			id: 'Most Played',
			songs: [],
			icon: <TbMusic />,
		},
		{
			id: 'Never Played',
			songs: [],
			icon: <TbQuestionMark />,
		},
		{
			id: 'Recently Added',
			songs: [],
			icon: <TbPlus />,
		},
		{
			id: 'Recently Played',
			songs: [],
			icon: <TbClock />,
		},
	]
	const userPlaylists = useStore(
		(state) => state.playlists.map(({ title, id }) => ({ title, id })),
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
