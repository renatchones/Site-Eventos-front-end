import { CasaService } from './../casa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CasaShow } from './../casa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-delete',
  templateUrl: './casa-delete.component.html',
  styleUrls: ['./casa-delete.component.css']
})
export class CasaDeleteComponent implements OnInit {

  casaShow : CasaShow
  
  constructor(private casaService: CasaService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.casaService.readById(id).subscribe((casaShow) => {
      this.casaShow = casaShow;
    });
  }
  deleteCasaShow(): void{
    this.casaService.delete(this.casaShow.id).subscribe(() => {
      this.casaService.showMessage('Casa de show Excluída com Sucesso!');
      this.router.navigate(["/casas"]);
    })
  }

  cancelCasaShow(): void{
    this.router.navigate(["/casas"])
  }

}