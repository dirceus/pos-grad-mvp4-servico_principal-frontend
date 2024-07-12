import { Component } from '@angular/core';
import { RankingService } from './ranking.service';
import { RankingItem } from './ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  ranking: RankingItem[] = []


  constructor(private rankingService: RankingService){}


  ngAfterViewInit(): void {
    this.obterRanking();
  }

  obterRanking() {
    this.rankingService.obterRanking().subscribe({
      next: (itens) => {
        this.ranking = itens;
      },
      error: (e) => console.error(e)
    })
  }

  obterNomeUsuario(id_usuario: number){

    const nomes = ["Fulano", "Beltrano", "Sicrano", "Joãozinho", "Zé"]

    return nomes[id_usuario-1]

  }


}
