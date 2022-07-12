import { nanoid } from 'nanoid'

import create from 'zustand'

export interface Song {
	id: string
	title: string
	path: string
}

export interface Album {
	id: string
	title: string
	artist: string
	songs: Song[]
}

export interface Playlist {
	id: string
	title: string
	songs: Song[]
}

export interface State {
	playlists: Playlist[]
	currentPlaylist: string
	setCurrentPlaylist: (id: string) => void
	addPlaylist: (title: string) => void
}

const useStore = create<State>((set) => ({
	playlists: [],
	currentPlaylist: 'Favorite Songs',
	setCurrentPlaylist: (id: string) =>
		set((state) => ({
			...state,
			currentPlaylist: id,
		})),
	addPlaylist: (title: string) =>
		set((state) => ({
			...state,
			playlists: [...state.playlists, { id: nanoid(), title, songs: [] }],
		})),
}))

export default useStore
