import { Recommendation } from './recommendation';

export interface RecommendationsRootReq {
  page: number;
  results: Recommendation[];
  total_pages: number;
  total_results: number;
}
