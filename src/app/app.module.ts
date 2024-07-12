import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { HeaderComponent } from './shared/header/header.component';

import { RankingComponent } from './ranking/ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestoesComponent,
    HeaderComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
    MatChipsModule,
    NotifierModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


