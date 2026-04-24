import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonfakery.com/movies/simple-paginate';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(this.apiUrl);
  }
}