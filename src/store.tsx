import { nanoid } from 'nanoid'
import React, { ReactNode } from 'react'
import {
	TbClock,
	TbMusic,
	TbPlus,
	TbQuestionMark,
	TbStar,
} from 'react-icons/tb'
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

export interface defaultPlaylist {
	id: string
	songs: []
	icon: ReactNode
}

export interface State {
	defaultPlaylists: defaultPlaylist[]
	userPlaylists: Playlist[]
	currentPlaylist: string
	setCurrentPlaylist: (id: string) => void
	addUserPlaylist: (title: string) => void
}

const useStore = create<State>((set) => ({
	userPlaylists: [],
	defaultPlaylists: [
		{
			id: 'Favorite Songs',
			songs: [],
			icon: <TbStar />,
		},
		{
			id: 'Most Played',
			songs: [],
			icon: <TbMusic />,
		},
		{
			id: 'Never Played',
			songs: [],
			icon: <TbQuestionMark />,
		},
		{
			id: 'Recently Added',
			songs: [],
			icon: <TbPlus />,
		},
		{
			id: 'Recently Played',
			songs: [],
			icon: <TbClock />,
		},
	],
	currentPlaylist: 'Favorite Songs',
	setCurrentPlaylist: (id: string) =>
		set((state) => ({
			...state,
			currentPlaylist: id,
		})),
	addUserPlaylist: (title: string) =>
		set((state) => ({
			...state,
			userPlaylists: [
				...state.userPlaylists,
				{ id: nanoid(), title, songs: [] },
			],
		})),
}))

export default useStore
