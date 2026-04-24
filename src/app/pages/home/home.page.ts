import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonThumbnail,
  IonImg, IonSearchbar, IonSpinner
} from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonThumbnail,
    IonImg, IonSearchbar, IonSpinner
  ]
})
export class HomePage implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchTerm: string = '';
  loading: boolean = true;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe((data: any) => {
      this.movies = data.data;
      this.filteredMovies = data.data;
      this.loading = false;
    });
  }

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie =>
      movie.original_title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openDetails(movie: any) {
    this.router.navigate(['/details', movie.id], {
      state: { movie }
    });
  }
}