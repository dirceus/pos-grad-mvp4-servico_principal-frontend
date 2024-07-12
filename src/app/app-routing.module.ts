import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { QuestoesComponent } from './questoes/questoes.component';


const routes: Routes = [
  {
    path: '',
    component: QuestoesComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }