import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVService } from '../TV.service';
import { Store } from '@ngrx/store';

import { ITv } from '../interfaces/tv-interface';
import { AppState } from 'src/app/app.state';
import * as ParamsDataActions from '../actions/film-data.actions';
import { Subject } from 'rxjs';
import { map, tap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit, OnDestroy {
  private ngDestroyed$ = new Subject();

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
    this.route.params.pipe(takeUntil(this.ngDestroyed$)).subscribe(params => {
      this.paramId = params.id;
      this.tvService.getTVShowByGenre(params.id).pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => {
        this.moviesData = data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      });
    });
  }

  onChangePage(event: any) {
    this.route.params.pipe(takeUntil(this.ngDestroyed$)).subscribe(params => {
      this.tvService.getTVShowByGenre(params.id, event).pipe(takeUntil(this.ngDestroyed$)).
      subscribe(data => {
        this.moviesData = data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      });
    });
  }

  ngOnDestroy() {
    this.ngDestroyed$.next(true);
  }

}
