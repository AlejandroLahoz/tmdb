import { TVShow } from './tv-shows';

export interface TVShowsReqRoot {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
}
