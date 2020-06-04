import { Observable } from 'rxjs';
import { CasaShow } from './casa.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  baseUrl = "http://localhost:8080/casas"


  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"

    })


}

create(casaShow: CasaShow): Observable<CasaShow> {
  return this.http.post<CasaShow>(this.baseUrl, casaShow)

  }


  read():Observable<CasaShow[]>{
    return this.http.get<CasaShow[]>(this.baseUrl)
  }

  readById(id: number): Observable<CasaShow>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<CasaShow>(url)
  }

  update(casaShow: CasaShow): Observable<CasaShow>{
    const url = `${this.baseUrl}/${casaShow.id}`
    return this.http.put<CasaShow>(url, casaShow)

  }


  delete(id: number): Observable<CasaShow>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CasaShow>(url);
  }

}

