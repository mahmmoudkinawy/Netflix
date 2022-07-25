import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMAGES_SIZES } from '../../../app/constants/images-sizes';
import { Movie } from '../../../app/models/movie';
import { MovieCredits } from '../../../app/models/movieCredits';
import { MovieImages } from '../../../app/models/movieImages';
import { MovieVideo } from '../../../app/models/MovieVideo';
import { MoviesService } from '../../../app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  readonly imagesSizes = IMAGES_SIZES;
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovieCredits(id: string) {
    this.moviesService
      .getMovieCredits(id)
      .subscribe((movieCredits) => (this.movieCredits = movieCredits));
  }

  getMovieImages(id: string) {
    this.moviesService
      .getMovieImages(id)
      .subscribe((movieImages) => (this.movieImages = movieImages));
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
