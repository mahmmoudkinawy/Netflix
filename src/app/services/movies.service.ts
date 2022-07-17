import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${this.baseUrl}/movie/upcoming`, {
      params: {
        api_key: '80f79dcc24fce9ca938dc42756edb324',
      },
    });
  }
}
