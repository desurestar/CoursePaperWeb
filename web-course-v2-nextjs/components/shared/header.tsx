import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Container } from './container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex item-center justify-between py-8'>
				<div>
					<Image src='/logo.png' alt='Logo' width={35} height={35}></Image>
				</div>
			</Container>
		</header>
	)
}
