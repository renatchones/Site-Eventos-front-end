import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

 
  evento : Evento
  
  constructor(private eventoService: EventoService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe((evento) => {
      this.evento = evento;
    });
  }
  deleteEvento(): void{
    this.eventoService.delete(this.evento.id).subscribe(() => {
      this.eventoService.showMessage('Evento Excluído com Sucesso!');
      this.router.navigate(["/eventos"]);
    })
  }

  cancelEvento(): void{
    this.router.navigate(["/eventos"])
  }

}