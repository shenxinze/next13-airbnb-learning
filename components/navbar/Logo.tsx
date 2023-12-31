'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
	const router = useRouter()
	return (
		<Image
			className='hidden md:block cursor-pointer w-auto h-auto'
			src='/images/logo.png'
			alt='Logo'
			height={100}
			width={100}
			onClick={() => router.push('/')}
		/>
	)
}

export default Logo
