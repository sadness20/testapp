import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://swapi.dev/api'

  constructor(private httpClient: HttpClient) { }

  getPlanets(page: number) {
    return this.httpClient.get<any>(`${this.apiUrl}/planets/?page=${page}`).pipe(map(res => {
      return res.results.map((planet: Planet) => {
        return {
          name: planet.name,
          terrain: planet.terrain,
          climate: planet.climate,
          url: planet.url,
          residents: planet.residents
        } as Planet
      })
    }))
  }

  getPeople() {
    return this.httpClient.get<any>(`${this.apiUrl}/people`).pipe(map(res => {
      return res.results.map((person: Person) => {
        return {
          name: person.name,
          gender: person.gender,
          height: person.height,
        } as Person
      })
    }))
  }


  getSpaceships() {
    return this.httpClient.get<any>(`${this.apiUrl}/starships`).pipe(map(res => {
      return res.results.map((spaceship: Spaceship) => {
        return {
          name: spaceship.name,
          model: spaceship.model,
          manufacturer: spaceship.manufacturer,
        } as Spaceship
      })
    }))
  }


}



export interface Planet {
  index: number
  name: string
  terrain: string
  climate: string
  url: string
  residents: Person[]
}

export interface Person {
  name: string
  gender: string
  height: string
}


export interface Spaceship {
  name: string
  model: string
  manufacturer: string
}

