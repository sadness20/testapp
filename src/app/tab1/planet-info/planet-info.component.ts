import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { ApiService, Planet } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent {
  @Input() planet: Planet = {} as Planet;

  constructor(private apiService: ApiService, private modalCtrl: ModalController) {

  }

  close() {
    this.modalCtrl.dismiss()
  }

}
