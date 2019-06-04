import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVService } from '../TV.service';

import { ITv } from '../interfaces/tv-interface';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit, OnDestroy {
  private sub: any;
  currentPage: number;
  totalPages: string;

  arrayOfPaginator: Array<any> = [];

  private moviesData: ITv = new ITv();

  constructor(
    private route: ActivatedRoute,
    private tvService: TVService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
