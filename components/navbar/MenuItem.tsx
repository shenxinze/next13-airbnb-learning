'use client'

import React from 'react'
import useMenuStore from '@/hooks/useMenu'

type MenuItemProps = {
	onClick: () => void
	label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
	const menuStore = useMenuStore()
	const clickMenuItem = () => {
		menuStore.toggleOpen()
		onClick()
	}
	return (
		<div
			onClick={clickMenuItem}
			className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
			{label}
		</div>
	)
}

export default MenuItem
