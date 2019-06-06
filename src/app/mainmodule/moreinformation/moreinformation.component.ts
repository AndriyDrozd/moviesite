import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil} from 'rxjs/operators';

import { TVService } from '../TV.service';
import { IFilm } from '../interfaces/tv-interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-moreinformation',
  templateUrl: './moreinformation.component.html',
  styleUrls: ['./moreinformation.component.scss']
})
export class MoreinformationComponent implements OnInit, OnDestroy {
  private ngDestroyed$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private tvService: TVService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('filmInfo').pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.ngDestroyed$.next(true);
  }

}
