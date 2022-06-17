import { Movie } from './movie';

export interface PopularMoviesReqRoot {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
