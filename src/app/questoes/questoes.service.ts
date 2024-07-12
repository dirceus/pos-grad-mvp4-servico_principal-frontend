import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, of, share } from 'rxjs';
import { QuestaoCompleta, TipoQuestao, Disciplina, Assunto, RespostaRequest,RespostaResponse, QuestaoIdResponse} from './questoes.model';
import { NotifierService } from 'angular-notifier';


const baseUrlQuestao = 'http://localhost:5000/api/questao';
const baseUrlResponder = 'http://localhost:5001';
const baseUrlGameficacao= 'http://localhost:5002/api';

@Injectable({
  providedIn: 'root'
})
export class QuestoesService {
    
    

    constructor(private http: HttpClient){}

    obterUltimaQuestaoRespondida(id_usuario: number): Observable<QuestaoIdResponse>{
        return this.http.get<QuestaoIdResponse>(`${baseUrlResponder}/ultima_questao_respondida/`+id_usuario).pipe(share());
    }

    obterQuestaoNaoRespondida(id: number): Observable<QuestaoCompleta> {
        return this.http.get<QuestaoCompleta>(`${baseUrlQuestao}`+'/proxima/'+id).pipe(share());
    }

    responderQuestao(data: RespostaRequest): Observable<any> {
        return this.http.post<RespostaResponse>(`${baseUrlResponder}/resposta`, data);
    }
    
    computarPontuacaoErro(id_usuario: number): Observable<any> {
        return this.http.post<RespostaResponse>(`${baseUrlGameficacao}/pontuar_error`, {'id_usuario': id_usuario});
    }



}



