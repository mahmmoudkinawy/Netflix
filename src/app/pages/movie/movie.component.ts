import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  readonly imagesSizes = IMAGES_SIZES;
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }

  getMovieVideos(id: string) {
    this.moviesService
      .getMovieVideos(id)
      .subscribe((movieVideos) => (this.movieVideos = movieVideos));
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }
}
