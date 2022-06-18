import { DetailReqRoot } from '../../interfaces/detail-req';
import { Movie } from '../../interfaces/movie';
import { TVShow } from '../../interfaces/tv-shows';

type RequestStatus = 'pending' | 'success' | 'error';

export interface DataState {
  listMovie: Movie[];
  loadingListMovieStatus: RequestStatus;
  listTVShow: TVShow[];
  loadingListTVShowStatus: RequestStatus;
  detail: DetailReqRoot | null;
  loadingDetailStatus: RequestStatus;
}

export const intialState: DataState = {
  listMovie: [],
  listTVShow: [],
  loadingListMovieStatus: 'pending',
  loadingListTVShowStatus: 'pending',
  detail: null,
  loadingDetailStatus: 'pending',
};
