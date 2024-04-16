import {atomWithStorage} from 'jotai/utils'
import {TVShowType} from './type'

export const favoriteTVShowsAtom = atomWithStorage<TVShowType[]>(
  'favoriteTVShows',
  []
)

export const accessed = atomWithStorage<Boolean>('accessed', false)
