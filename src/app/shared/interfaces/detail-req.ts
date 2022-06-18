import { BelongsToCollection } from './belongs-collection';
import { Genre } from './genre';
import { ProductionCompany } from './production-company';
import { ProductionCountry } from './production-country';
import { RecommendationsRootReq } from './recomendations-req';
import { SpokenLanguage } from './spoken-language';

export interface DetailReqRoot {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  recommendations: RecommendationsRootReq;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
}
