import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Vision' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Dr. Strange' },
      { id: 5, name: 'Spiderman' },
      { id: 6, name: 'Iron Man' },
      { id: 7, name: 'Capitan America' },
      { id: 8, name: 'Ant Man' },
      { id: 9, name: 'Black Widow' },
      { id: 10, name: 'Scarlet Witch' },
      { id: 11, name: 'Black Panther' },
      { id: 12, name: 'Deadpool' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}