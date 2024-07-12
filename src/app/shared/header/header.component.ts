import { Component } from '@angular/core';
import { HeeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  path_user_logado: String | undefined;


  constructor(private headerService: HeeaderService){

  }

  ngAfterViewInit(): void {
    this.obterFoto();
  }

  obterFoto() {
    this.headerService.obterFotoServicoExterno().subscribe({
      next: (itens) => {
        this.path_user_logado = itens[0].url;
      },
      error: (e) => console.error(e)
    })
  }


}
