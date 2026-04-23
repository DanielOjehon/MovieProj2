import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule] 
})
export class DetailsPage {

  movie: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.movie = nav?.extras.state?.['movie'];
  }
}