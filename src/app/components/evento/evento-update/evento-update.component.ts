import { CasaShow } from './../../casa/casa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';
import { CasaService } from '../../casa/casa.service';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {


  evento: Evento;

  casas: CasaShow[];

  idCasa = 0;

  constructor(private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute, private casaService: CasaService) { }

  ngOnInit(): void {
    this.buscaCasas();
    const id = +this.route.snapshot.paramMap.get('id')
    this.eventoService.readById(id).subscribe(evento => {
      this.evento = evento;
      this.getCasa();


    })
  }

  setCasa(): void {
    const casaShow = new CasaShow();     
    casaShow.id = this.idCasa;
    this.evento.casaShow = casaShow;
    console.log(this.evento.casaShow.id);
  }

  getCasa(): void {
    console.log(this.evento.casaShow.id);
    this.idCasa = this.evento.casaShow.id;
  }



  buscaCasas(): void {
    this.casaService.read().subscribe(data => {
      this.casas = data;

    });

  }

  updateEvento(): void {
    this.setCasa();
    console.log("casaShow.id" + this.evento.casaShow.id);
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMessage('Evento Atualizado com sucesso!')
      this.router.navigate(["/eventos"]);
    })
  }

  cancelEvento(): void {
    this.router.navigate(['/eventos'])

  }



}