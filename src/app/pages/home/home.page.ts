import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
})
export class HomePage {

  movies: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  openDetails(movie: any) {
    this.router.navigate(['/details'], { state: { movie } });
  }
}