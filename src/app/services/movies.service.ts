import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Movie, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly baseUrl = environment.apiUrl;
  private readonly apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(
    type: string = 'upcoming',
    count: number = 12
  ): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos`, {
        params: {
          api_key: environment.apiKey,
        },
      })
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getPaginatedMovies(page: number): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/popular?`, {
        params: {
          page: page,
          api_key: this.apiKey,
        },
      })
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
