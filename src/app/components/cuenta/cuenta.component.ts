import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/models/cuenta.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaService } from 'src/app/service/cuenta/cuenta.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {

  listaDeCuentas: Array<Cuenta>;
  public pagina =0;


  constructor(private authService: AuthService, private cuentaService: CuentaService, private router: Router) {
    this.listaDeCuentas = new Array();
    this.listarCuentas();
  }


  ngOnInit(): void {
  }

  listarCuentas() {
    this.cuentaService.listarCuentas().
      subscribe({
        next: response => {
          this.listaDeCuentas = response

        }, error: error => (
          console.log(error)
        )


      });


  }

}
