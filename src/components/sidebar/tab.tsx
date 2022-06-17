import { ReactNode } from 'react'
import './tab.css'

export default ({ icon, children }: { icon?: ReactNode, children: ReactNode }) => {
	return <span className='container'>
		<div className='box'>
			<div className='icon'>{icon}</div>
			<p className='text'>{children}</p>
		</div>
	</span>
}