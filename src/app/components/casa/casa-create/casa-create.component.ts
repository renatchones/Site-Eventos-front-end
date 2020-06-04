import { CasaService } from './../casa.service';
import { CasaShow } from './../casa.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-create',
  templateUrl: './casa-create.component.html',
  styleUrls: ['./casa-create.component.css']
})
export class CasaCreateComponent implements OnInit {

  casaShow: CasaShow = {
    id:0, 
    nome: '',
    endereco: '',
    capacidade: 0
   
  }

  constructor(private casaService: CasaService,
    private router: Router) { }

  ngOnInit(): void {
   
  }
    createCasaShow(): void{
      
      this.casaService.create(this.casaShow).subscribe(() => {
        
        this.casaService.showMessage('CASA DE SHOW CADASTRADO!')
        this.router.navigate(['/casas'])
      });

      
    }
    cancelCasaShow(): void{
      this.router.navigate(['/casas'])
    }
 

}

