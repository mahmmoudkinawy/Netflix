import { Movie } from './movie';

export interface MovieDto {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
