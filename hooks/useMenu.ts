import { create } from 'zustand'

type MenuStore = {
	isOpen: boolean
	toggleOpen: () => void
}

const useMenuStore = create<MenuStore>(set => ({
	isOpen: false,
	toggleOpen: () => set(state => ({ isOpen: !state.isOpen }))
}))

export default useMenuStore
