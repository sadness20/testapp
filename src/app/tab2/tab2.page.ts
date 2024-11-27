import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person, ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public people: Observable<Person[]> = of([])

  constructor(private apiService: ApiService) {
    this.people = apiService.getPeople()
  }

}
