import { Component, OnInit } from '@angular/core';
import { TVService } from '../TV.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private getTvGenres = [];

  constructor(
    private tvService: TVService
  ) { }

  ngOnInit() {
    this.tvService.getGenres().subscribe(data => {
      this.getTvGenres = data.genres;
    });
  }



}
