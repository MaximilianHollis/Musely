import { motion } from 'framer-motion'
import Slider from './slider'
import styles from './index.module.css'

export default () => (
	<motion.div
		className={styles.overlay}
		initial={{ y: 120 }}
		animate={{
			y: 0,
		}}
		transition={{
			type: 'tween',
			duration: 0.2,
		}}
	>
		<div className={styles.overlay_content}>
			<div className={styles.information}>
				<img
					draggable={false}
					src="https://images.unsplash.com/photo-1655047273143-91261102716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt="album"
					className={styles.image}
				/>
				<div
					style={{
						alignItems: 'flex-start',
						display: 'flex',
						flexDirection: 'column',
						padding: '0 4px',
					}}
				>
					<p className={styles.title}>Titlefassssssssssssssssssssssss</p>
					<p className={styles.artist}>Artist</p>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.buttons}>
					back
					<button type="button" className={styles.play}>
						a
					</button>
					forw
				</div>
				<Slider />
			</div>
			<div className={styles.settings}>settings</div>
		</div>
	</motion.div>
)
