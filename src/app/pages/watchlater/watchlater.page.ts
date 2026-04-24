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
  selector: 'app-watchlater',
  templateUrl: './watchlater.page.html',
  styleUrls: ['./watchlater.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonThumbnail,
    IonImg, IonButton, IonIcon
  ]
})
export class WatchLaterPage {
  watchLater: any[] = [];

  constructor(private storageService: StorageService, private router: Router) {
    addIcons({ trash });
  }

  async ionViewWillEnter() {
    this.watchLater = await this.storageService.getWatchLater();
  }

  async remove(movieId: string) {
    await this.storageService.removeFromWatchLater(movieId);
    this.watchLater = await this.storageService.getWatchLater();
  }

  openDetails(movie: any) {
    this.router.navigate(['/details', movie.id]);
  }
}