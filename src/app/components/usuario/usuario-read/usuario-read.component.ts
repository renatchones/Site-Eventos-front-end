import { Router } from '@angular/router';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['login', 'senha', 'nome', 'sobrenome', 'email', 'action']

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios)
    })
  }

  navigateToUsuarioCreate(){
    this.router.navigate(['usuarios/create']);

  }


}
