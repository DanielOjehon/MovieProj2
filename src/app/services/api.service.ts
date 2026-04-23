import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>('assets/movies.json');
  }

  getMovieById(id: number) {
    return this.http.get<any>('assets/movies.json');
  }
}