import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import{MatMenuModule} from '@angular/material/menu';

import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';

import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';


import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';

import{ MatSelectModule } from '@angular/material/select';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CasaCreateComponent,
    CasaReadComponent,
    UsuarioCreateComponent,
    UsuarioCrudComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    CasaUpdateComponent,
    CasaDeleteComponent,
    EventoCreateComponent,
    EventoReadComponent,
    EventoUpdateComponent,
    EventoDeleteComponent,
    EventoCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
