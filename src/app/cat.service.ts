import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://localhost:5001/api/cat');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('https://localhost:5001/api/cat/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:5000/api/cat/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('http://localhost:5000/api/cat/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:5000/api/cat/' + name);
  }
}
