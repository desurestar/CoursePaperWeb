import { useEffect, useState } from 'react'

export function Timer({ className }) {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)
		return () => clearInterval(timerId)
	}, [])
	return (
		<div className={className}>
			{currentTime.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			})}
		</div>
	)
}
