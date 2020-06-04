import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from './../casa.service';
import { CasaShow } from './../casa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-update',
  templateUrl: './casa-update.component.html',
  styleUrls: ['./casa-update.component.css']
})
export class CasaUpdateComponent implements OnInit {

  casaShow: CasaShow

  constructor(private casaService: CasaService, 
              private router : Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.casaService.readById(id).subscribe(casaShow => {
      this.casaShow = casaShow

    })
  }

  updateCasaShow(): void {
    this.casaService.update(this.casaShow).subscribe(() => {
      this.casaService.showMessage('Casa de show Atualizada com sucesso!')
      this.router.navigate(["/casas"]);
    })
  }

  cancelCasaShow(): void{
    this.router.navigate(['/casas'])

  }

  

}