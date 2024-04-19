import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { Cuenta } from 'src/app/models/cuenta.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  public listarCuentas(){
    const url=`${base_url}CXC/Senior/Accounts`;
    
    return this.http.get<Array<Cuenta>>(url);
  }
}
