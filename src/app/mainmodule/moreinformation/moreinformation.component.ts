import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil} from 'rxjs/operators';

import { TVService } from '../TV.service';
import { IFilmDetails } from '../interfaces/tv-interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-moreinformation',
  templateUrl: './moreinformation.component.html',
  styleUrls: ['./moreinformation.component.scss']
})
export class MoreinformationComponent implements OnInit, OnDestroy {
  private ngDestroyed$ = new Subject();

  private setColor: string = '';

  private filmData: IFilmDetails = new IFilmDetails();

  constructor(
    private route: ActivatedRoute,
    private tvService: TVService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
      this.tvService.getMovieReviews(this.route.snapshot.params['id']).pipe(takeUntil(this.ngDestroyed$)).
      subscribe(data => {
        this.filmData = data;
        console.log(this.filmData);
        if(this.filmData.vote_average >= 7) {
          this.setColor = 'green';
        } else if(this.filmData.vote_average >= 4 && this.filmData.vote_average < 7) {
          this.setColor = 'yellow';
        } else {
          this.setColor = 'red';
        }
      });
  }

  ngOnDestroy() {
    this.ngDestroyed$.next(true);
  }

}
