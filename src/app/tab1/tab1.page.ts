import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService, Planet } from '../services/api.service';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public planets: Planet[] = []
  public currentPage = 1
  public limit = 10
  public isLoading = false

  constructor(private apiService: ApiService, private modalCtrl: ModalController) {
    this.loadPlanets();
  }

  loadPlanets() {
    this.isLoading = true;
    this.apiService.getPlanets(this.currentPage).subscribe(
      (res) => {
        this.planets = [...this.planets, ...res]
        this.isLoading = false
      },
      (err) => {
        console.error(err);
        this.currentPage --
        this.isLoading = false
      }
    );
  }

  onIonInfinite(event: any) {
    this.currentPage ++
    this.loadPlanets()
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete()
    }, 500)
  }

  async viewPlanet(planet: Planet, index: number) {
    const modal = await this.modalCtrl.create({
      component: PlanetInfoComponent,
      componentProps: { planet: {...planet, index} },
    });
    return await modal.present();
  }
}
