import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService, Planet } from '../services/api.service';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public planets: Observable<Planet[]> = of([])

  constructor(private apiService: ApiService, private modalCtrl: ModalController) {
    this.planets = apiService.getPlanets()

    apiService.getPlanets().subscribe(res => {
      console.log(res)
    })
  }

  async viewPlanet(planet: Planet) {
    const modal = await this.modalCtrl.create({
      component: PlanetInfoComponent,
      componentProps: { planet },
    });
    return await modal.present();
  }

}
