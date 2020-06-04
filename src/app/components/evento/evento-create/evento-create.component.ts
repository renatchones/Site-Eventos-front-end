import { CasaService } from './../../casa/casa.service';
import { CasaShow } from './../../casa/casa.model';
import { Router } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  evento: Evento = {
    id:0, 
    nome: '',
    descricao: '',
    ingressos: 0,
    preco: 0,
    casaShow: { 
      id:0, 
      nome: '',
      endereco: '',
      capacidade: 0}
  }

  casas: CasaShow[];

  idCasa = 0;

  constructor(private eventoService: EventoService,
    private router: Router, private casaService: CasaService) { }

  ngOnInit(): void {
   this.buscaCasas();
   
  }

    setCasa(): void{
      console.log(this.idCasa);
      this.evento.casaShow.id = this.idCasa;

    }



    buscaCasas(): void{
      this.casaService.read().subscribe(data => {
        this.casas=data;
        
      });

    } 

    createEvento(): void{
      this.setCasa();
      console.log(this.evento);
      this.eventoService.create(this.evento).subscribe(() => {
        
        this.eventoService.showMessage('EVENTO CADASTRADO!')
        this.router.navigate(['/eventos'])
      });

      
    }
    cancelEvento(): void{
      this.router.navigate(['/eventos'])
    }
 

}
