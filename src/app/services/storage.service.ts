import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageReady = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageReady = true;
  }

  async addToFavourites(movie: any) {
    const existing = await this.getFavourites();
    if (!existing.find((m: any) => m.id === movie.id)) {
      existing.push(movie);
      await this.storage.set('favourites', existing);
    }
  }

  async removeFromFavourites(movieId: string) {
    const existing = await this.getFavourites();
    const updated = existing.filter((m: any) => m.id !== movieId);
    await this.storage.set('favourites', updated);
  }

  async getFavourites(): Promise<any[]> {
    return (await this.storage.get('favourites')) || [];
  }

  async addToWatchLater(movie: any) {
    const existing = await this.getWatchLater();
    if (!existing.find((m: any) => m.id === movie.id)) {
      existing.push(movie);
      await this.storage.set('watchlater', existing);
    }
  }

  async removeFromWatchLater(movieId: string) {
    const existing = await this.getWatchLater();
    const updated = existing.filter((m: any) => m.id !== movieId);
    await this.storage.set('watchlater', updated);
  }

  async getWatchLater(): Promise<any[]> {
    return (await this.storage.get('watchlater')) || [];
  }
}