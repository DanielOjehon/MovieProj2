import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonThumbnail,
  IonImg, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonThumbnail,
    IonImg, IonButton, IonIcon
  ]
})
export class FavouritesPage {
  favourites: any[] = [];

  constructor(private storageService: StorageService, private router: Router) {
    addIcons({ trash });
  }

  async ionViewWillEnter() {
    this.favourites = await this.storageService.getFavourites();
  }

  async remove(movieId: string) {
    await this.storageService.removeFromFavourites(movieId);
    this.favourites = await this.storageService.getFavourites();
  }

  openDetails(movie: any) {
    this.router.navigate(['/details', movie.id], {
      state: { movie }
    });
  }
}