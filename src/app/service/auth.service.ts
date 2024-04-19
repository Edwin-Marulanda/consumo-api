import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';
import { Usuario } from '../models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  login(usuario:Usuario): Observable<any> {
    return this.http.post<any>(`${base_url}Cuenta/Login`, { "userLogin": usuario.userLogin,
    "password": usuario.password,
    "connectionName": usuario.connectionName});
  }
}
