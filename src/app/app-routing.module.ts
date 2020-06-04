import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [{

  path: "",
  component: HomeComponent

},{

  path:'usuarios',
  component: UsuarioReadComponent
},{
  path:'usuarios/create',
  component: UsuarioCreateComponent

},{
  path:'usuarios/update/:id',
  component: UsuarioUpdateComponent
},{
  
  path:'usuarios/delete/:id',
  component: UsuarioDeleteComponent

},





{

  path:'casas',
  component: CasaReadComponent
},{
  path:'casas/create',
  component: CasaCreateComponent

},{
  path:'casas/update/:id',
  component: CasaUpdateComponent
},{
  
  path:'casas/delete/:id',
  component: CasaDeleteComponent

},





{
  path:'eventos',
  component: EventoReadComponent
},{
  path:'eventos/create',
  component: EventoCreateComponent

},{
  path:'eventos/update/:id',
  component: EventoUpdateComponent
},{
  
  path:'eventos/delete/:id',
  component: EventoDeleteComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
