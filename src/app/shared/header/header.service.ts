import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, of, share } from 'rxjs';
import { CatApiResponse } from './header.model';


const baseUrl = 'https://api.thecatapi.com/v1/images/search';

@Injectable({
  providedIn: 'root'
})
export class HeeaderService {
    
    
    constructor(private http: HttpClient){}

    obterFotoServicoExterno(): Observable<CatApiResponse[]> {
        return this.http.get<CatApiResponse[]>(`${baseUrl}`).pipe(share());
    }
    
}

