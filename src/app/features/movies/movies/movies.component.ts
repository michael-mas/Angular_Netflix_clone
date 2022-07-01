import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public trendings!:any[];
  public discovers!:any[];
  public genres!:{result: any[], name: string}[];

  constructor(
    private readonly _api: MoviesService,
  ) { }

  async ngOnInit() {
    this.trendings = await this._api.load('trending');
    this.discovers = await this._api.load('discover');
    this.genres = await this._api.getGenres();
  }

}
