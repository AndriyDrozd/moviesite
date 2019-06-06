import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVService } from '../TV.service';
import { Store } from '@ngrx/store';

import { ITv } from '../interfaces/tv-interface';
import { IFilm } from '../interfaces/tv-interface';
import { AppState } from 'src/app/app.state';
import * as ParamsDataActions from '../actions/film-data.actions';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit, OnDestroy {
  private sub: any;
  private currentPage: number;
  private totalPages: string;
  private paramId: number;

  private arrayOfPaginator: Array<any> = [];

  private moviesData: ITv = new ITv();

  constructor(
    private route: ActivatedRoute,
    private tvService: TVService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.paramId = params.id;
      this.tvService.getTVShowByGenre(params.id).subscribe(data => {
        this.moviesData = data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      });
    });
  }

  onChangePage(event: any) {
    this.route.params.subscribe(params => {
      this.tvService.getTVShowByGenre(params.id, event).subscribe(data => {
        this.moviesData = data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      });
    });
  }

  sendFilmInfo(movieData: IFilm) {
    this.store.dispatch(new ParamsDataActions.AddParamInfo(movieData));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
