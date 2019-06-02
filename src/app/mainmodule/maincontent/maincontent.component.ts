import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVService } from '../TV.service';

import { TvInterface } from '../interfaces/tv-interface';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {
  private sub: any;
  private paramId: string;


  private getMovies: Array<TvInterface[]> = [];

  constructor(
    private route: ActivatedRoute,
    private tvService: TVService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.tvService.getTVShowByGenre(params.id).subscribe(data => {
        this.getMovies = data;
        console.log(this.getMovies);
      });
    });
  }

}
