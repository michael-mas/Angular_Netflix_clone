import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
