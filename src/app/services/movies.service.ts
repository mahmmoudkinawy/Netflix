import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Movie, MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/upcoming`, {
        params: {
          api_key: '80f79dcc24fce9ca938dc42756edb324',
        },
      })
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
