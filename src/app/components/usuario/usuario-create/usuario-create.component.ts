import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
      id:0, 
      login: '',
      senha: '',
      nome: '',
      sobrenome: '',
      email: ''
    }
  
    constructor(private usuarioService: UsuarioService,
      private router: Router) { }
  
    ngOnInit(): void {
     
    }
      createUsuario(): void{
        
        this.usuarioService.create(this.usuario).subscribe(() => {
          
          this.usuarioService.showMessage('USUARIO CADASTRADO!')
          this.router.navigate(['/usuarios'])
        });
  
        
      }
      cancelUsuario(): void{
        this.router.navigate(['/usuarios'])
      }
   
  
  }
  
