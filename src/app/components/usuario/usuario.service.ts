
import { Injectable } from '@angular/core';
import{ MatSnackBar }from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  baseUrl = "http://localhost:8080/usuarios"

  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"

    })


}

create(usuario: Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(this.baseUrl, usuario)

  }


  read():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl)
  }

  readById(id: number): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Usuario>(url)
  }

  update(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)

  }


  delete(id: number): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuario >(url);
  }

}
