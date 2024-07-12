import { Component } from '@angular/core';
import { QuestaoCompleta, RespostaResponse } from './questoes.model';
import { QuestoesService } from './questoes.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent {

  id_usuario_logado = 1

  questao: QuestaoCompleta | undefined; 
  respostaResponse: RespostaResponse | undefined;
  viewResponder = true
  showNaoHaQuestoes = false

  alternativaSelecioanda : number | undefined;

  private notifier: NotifierService;

  constructor(private questoesService: QuestoesService, notifierService: NotifierService) {
     this.notifier = notifierService;
  }

  ngAfterViewInit(): void {
    this.obterQuestao()
  }

  ngOnInit(): void {
    
  }


  obterQuestao() {
    
    
    this.questoesService.obterUltimaQuestaoRespondida(1).subscribe({
      next: (item) => {

        if(item.id_questao >= 23){
          this.showNaoHaQuestoes = true;
        }

        this.questoesService.obterQuestaoNaoRespondida(item.id_questao ).subscribe({
          next: (questao) => {
            this.questao = questao;
          },
          error: (e) => console.error(e)
        })
      },
      error: (e) => console.error(e)
    })

    
    
  }

  proximaQuestao(){
    this.questoesService.obterUltimaQuestaoRespondida(this.id_usuario_logado).subscribe({
      next: (item) => {

        if(item.id_questao >= 23){
          this.showNaoHaQuestoes = true;
        }

        this.questoesService.obterQuestaoNaoRespondida(item.id_questao ).subscribe({
          next: (questao) => {
            this.questao = questao;
            this.viewResponder = true;
            this.alternativaSelecioanda = undefined;
          },
          error: (e) => console.error(e)
        })
      },
      error: (e) => console.error(e)
    })

  }

  responderQuestao(){

    console.log(this.alternativaSelecioanda)

    if(this.alternativaSelecioanda == undefined){
      this.notifier.notify('error', 'É necessário selecionar uma alternativa.');
     
    }else{

    let resposta = {
      id_questao: this.questao!.codigo,
      id_usuario: this.id_usuario_logado,
      id_alternativa: this.alternativaSelecioanda
    }

    this.questoesService.responderQuestao(resposta).subscribe({
      next: (respostaResponse) => {
          this.respostaResponse = respostaResponse;
          this.viewResponder = false;
          if(!respostaResponse.resultado){
            console.log("aqui");
            this.questoesService.computarPontuacaoErro(this.id_usuario_logado).subscribe({
              next: (result) => console.log(result),
              error: (e) => console.error(e)
            })
          }

          console.log(respostaResponse)
          
      },
      error: (e) => console.error(e)
    })
      }
    }

}
