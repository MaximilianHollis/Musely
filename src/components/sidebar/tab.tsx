import { ReactNode } from 'react'
import { TbPlaylist } from 'react-icons/tb'
import useStore from '../../store'
import './tab.css'

export default ({
	icon,
	children,
	id,
}: {
	icon?: ReactNode
	children?: string
	id?: string
}) => {
	const currentPlaylist = useStore((state) => state.currentPlaylist)
	const setCurrentPlaylist = useStore((state) => state.setCurrentPlaylist)
	const title = id || children

	return (
		<span key={id} className="container">
			<div
				className={`box ${currentPlaylist === id && 'active'}`}
				role="button"
				tabIndex={0}
				onClick={() => title && setCurrentPlaylist(title)}
			>
				<div className="icon">{icon || <TbPlaylist />}</div>
				<p className="text">{title}</p>
			</div>
		</span>
	)
}
