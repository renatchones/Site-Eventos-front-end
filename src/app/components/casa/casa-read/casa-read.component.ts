import { Router } from '@angular/router';
import { CasaService } from './../casa.service';
import { CasaShow } from './../casa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-read',
  templateUrl: './casa-read.component.html',
  styleUrls: ['./casa-read.component.css']
})
export class CasaReadComponent implements OnInit {

  casaShow: CasaShow[]
  displayedColumns = ['nome', 'endereco', 'capacidade','action']

  constructor(private casaService: CasaService, private router:Router) { }

  ngOnInit(): void {
    this.casaService.read().subscribe(casaShow => {
      this.casaShow = casaShow
      console.log(casaShow)
    })
  }

  navigateToCasaCreate(){
    this.router.navigate(['casas/create']);

  }

}
