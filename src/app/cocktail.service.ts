import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}
  getCocktails(): Cocktail[] {
    return [
      {
        id: 1,
        name: 'Pina Colada',
        price: '10$',
        img: 'https://images.ricardocuisine.com/services/recipes/8990.jpg',
      },
      {
        id: 2,
        name: 'MountGay',
        price: '7$',
        img: 'https://www.jamesbondlifestyle.com/sites/default/files/styles/semi_width_image/public/images/product/fd007-mount-gay-rum-casino-royale.jpg?itok=OGjBWITW',
      },
    ];
  }
}
