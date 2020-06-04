import { Router } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos: Evento[]
  displayedColumns = ['nome', 'descricao', 'ingressos', 'preco', 'action']

  constructor(private eventoService: EventoService, private router:Router) { }

  ngOnInit(): void {
    this.eventoService.read().subscribe(eventos => {
      this.eventos = eventos
      console.log(eventos)
    })
  }

  navigateToEventoCreate(){
    this.router.navigate(['eventos/create']);

  }


}
