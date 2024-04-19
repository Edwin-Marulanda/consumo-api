import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
export class CuentaComponent implements OnInit {

  listaDeCuentas: Array<Cuenta>;
  public pagina = 0;
  formRegCuenta;

  constructor(private cuentaService: CuentaService, private formBuilder: FormBuilder) {
    this.listaDeCuentas = new Array();
    this.listarCuentas();
  }


  ngOnInit() {
    this.formRegCuenta = this.formBuilder.group({
      codCli: ['',Validators.required],
      nomCli: ['',Validators.required],
      nitCli: ['',Validators.required],
      codCiu: ['',Validators.required],
      codDep: ['',Validators.required],
      codPai: ['',Validators.required],
      di2Cli: ['',Validators.required],
      te1Cli: ['',Validators.required],
      tipCli: ['',Validators.required],
      fecIng: ['',Validators.required],
      eMail: ['',Validators.required],
      tipIde: ['',Validators.required],
      ap1Cli: ['',Validators.required],
      nom1Cli: ['',Validators.required],
      tipPer: ['',Validators.required],
      estCli: ['',Validators.required],
      codCliExtr: ['',Validators.required],
      pagWeb: ['',Validators.required]

    });

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
