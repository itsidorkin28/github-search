import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'

export const FavouritesPage = () => {
	const { favourites } = useAppSelector(state => state.github)

	if (favourites.length === 0) return <p className={'text-center'}>No items.</p>
	return (
		<div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
			<ul className={'list-none'}>
				{favourites.map(f => (
					<li key={f} className={'mb-3'}>
						<a href={f}
						   target='_blank'
						>{f}</a>
					</li>
				))}
			</ul>
		</div>

	)
}

