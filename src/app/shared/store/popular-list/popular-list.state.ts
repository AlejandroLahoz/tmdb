import { Movie } from '../../interfaces/movie';
import { TVShow } from '../../interfaces/tv-shows';

type RequestStatus = 'pending' | 'success' | 'error';

export interface PopularListState {
  listMovie: Movie[];
  loadingListMovieStatus: RequestStatus;
  listTVShow: TVShow[];
  loadingListTVShowStatus: RequestStatus;
}

export const intialState: PopularListState = {
  listMovie: [],
  listTVShow: [],
  loadingListMovieStatus: 'pending',
  loadingListTVShowStatus: 'pending',
};
