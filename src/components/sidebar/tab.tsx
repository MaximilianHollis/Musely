import { ReactNode } from 'react'
import { TbPlaylist } from 'react-icons/tb'
import useStore from '../../store'
import styles from './tab.module.css'

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
		<span key={id} className={styles.container}>
			<div
				className={`${styles.box} ${
					currentPlaylist === title ? styles.active : ''
				}`}
				role="button"
				tabIndex={0}
				onClick={() => title && setCurrentPlaylist(title)}
			>
				<div className={styles.icon}>{icon || <TbPlaylist />}</div>
				<p className={styles.text}>{title}</p>
			</div>
		</span>
	)
}
