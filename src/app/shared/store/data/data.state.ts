import { DetailMovieReqRoot } from '../../interfaces/detail-movie-req';
import { Movie } from '../../interfaces/movie';
import { TVShow } from '../../interfaces/tv-shows';

type RequestStatus = 'pending' | 'success' | 'error';

export interface DataState {
  listMovie: Movie[];
  loadingListMovieStatus: RequestStatus;
  listTVShow: TVShow[];
  loadingListTVShowStatus: RequestStatus;
  detailMovie: DetailMovieReqRoot | null;
  loadingDetailStatus: RequestStatus;
}

export const intialState: DataState = {
  listMovie: [],
  listTVShow: [],
  loadingListMovieStatus: 'pending',
  loadingListTVShowStatus: 'pending',
  detailMovie: null,
  loadingDetailStatus: 'pending',
};
