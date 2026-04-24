import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonBackButton, IonButtons, IonImg, IonButton,
  IonIcon, ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, time } from 'ionicons/icons';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonBackButton, IonButtons, IonImg, IonButton, IonIcon
  ]
})
export class DetailsPage implements OnInit {
  movie: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private storageService: StorageService,
    private toastCtrl: ToastController
  ) {
    addIcons({ heart, time });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getMovies().subscribe((data: any) => {
      this.movie = data.data.find((m: any) => m.id === id);
    });
  }

  async addToFavourites() {
    await this.storageService.addToFavourites(this.movie);
    this.showToast('Added to Favourites ❤️');
  }

  async addToWatchLater() {
    await this.storageService.addToWatchLater(this.movie);
    this.showToast('Added to Watch Later 🕐');
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}