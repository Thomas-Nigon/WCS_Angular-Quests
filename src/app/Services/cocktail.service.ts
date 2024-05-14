import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../models/cocktail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);
  constructor() {}
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/Data/cocktails.json');
  }
}
