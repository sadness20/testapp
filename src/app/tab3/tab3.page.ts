import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Spaceship, ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public spaceships: Observable<Spaceship[]> = of([])

  constructor(private apiService: ApiService) {
    this.spaceships = apiService.getSpaceships()
  }

}
