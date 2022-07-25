import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SliderComponent } from './components/slider/slider.component';
import { LengthPipe } from './shared/pipes/length.pipe';
import { ItemComponent } from './components/item/item.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    NotFoundComponent,
    SliderComponent,
    LengthPipe,
    ItemComponent,
    ItemsBannerComponent,
    MovieComponent,
    VideoEmbedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
