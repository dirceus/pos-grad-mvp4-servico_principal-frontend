import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, of, share } from 'rxjs';
import { RankingItem } from './ranking.model';



const baseUrl = 'http://localhost:5002/api';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
    
    
    constructor(private http: HttpClient){}

    obterRanking(): Observable<RankingItem[]> {
        return this.http.get<RankingItem[]>(`${baseUrl}`+`/ranking`).pipe(share());
    }
    
}



