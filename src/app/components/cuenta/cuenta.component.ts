import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cuenta } from 'src/app/models/cuenta.model';
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
  mostrarFormulario = false;


  constructor(private cuentaService: CuentaService, private formBuilder: FormBuilder) {
    this.listaDeCuentas = new Array();
    this.listarCuentas();
  }


  ngOnInit() {
    this.formRegCuenta = this.formBuilder.group({
      codCli: ['', Validators.required],
      nomCli: ['', Validators.required],
      nitCli: ['', Validators.required],
      codCiu: ['', Validators.required],
      codDep: ['', Validators.required],
      codPai: ['', Validators.required],
      di2Cli: ['', Validators.required],
      te1Cli: ['', Validators.required],
      tipCli: ['', Validators.required],
      fecIng: ['', Validators.required],
      eMail: ['', Validators.required],
      tipIde: ['', Validators.required],
      ap1Cli: ['', Validators.required],
      nom1Cli: ['', Validators.required],
      tipPer: ['', Validators.required],
      estCli: ['', Validators.required],
      codCliExtr: ['', Validators.required],
      pagWeb: ['', Validators.required]

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

  registrarCuenta() {

    if (this.formRegCuenta.valid) {
      const cuenta: Cuenta = {
        codCli: this.formRegCuenta.value.codCli,
        nomCli: this.formRegCuenta.value.nomCli,
        nitCli: this.formRegCuenta.value.nitCli,
        codCiu: this.formRegCuenta.value.codCiu,
        codDep: this.formRegCuenta.value.codDep,
        codPai: this.formRegCuenta.value.codPai,
        di2Cli: this.formRegCuenta.value.di2Cli,
        te1Cli: this.formRegCuenta.value.te1Cli,
        tipCli: this.formRegCuenta.value.tipCli,
        fecIng: this.formRegCuenta.value.fecIng,
        eMail: this.formRegCuenta.value.eMail,
        tipIde: this.formRegCuenta.value.tipIde,
        ap1Cli: this.formRegCuenta.value.ap1Cli,
        nom1Cli: this.formRegCuenta.value.nom1Cli,
        tipPer: this.formRegCuenta.value.tipPer,
        estCli: this.formRegCuenta.value.estCli,
        codCliExtr: this.formRegCuenta.value.codCliExtr,
        pagWeb: this.formRegCuenta.value.pagWeb
      };

      this.cuentaService.registrarCuenta(cuenta).
        subscribe({
          next: response => {
            //response
          }, error: error => (
            console.log(error)
          )
        });
    }

  }
  verInformacion(cuenta: Cuenta) {
    this.formRegCuenta.get("codCli")?.setValue(cuenta.codCli);
    this.formRegCuenta.get("nomCli")?.setValue(cuenta.nomCli);
    this.formRegCuenta.get("nitCli")?.setValue(cuenta.nitCli);
    this.formRegCuenta.get("codCiu")?.setValue(cuenta.codCiu);
    this.formRegCuenta.get("codDep")?.setValue(cuenta.codDep);
    this.formRegCuenta.get("codPai")?.setValue(cuenta.codPai);
    this.formRegCuenta.get("di2Cli")?.setValue(cuenta.di2Cli);
    this.formRegCuenta.get("te1Cli")?.setValue(cuenta.te1Cli);
    this.formRegCuenta.get("tipCli")?.setValue(cuenta.tipCli);
    this.formRegCuenta.get("fecIng")?.setValue(cuenta.fecIng);
    this.formRegCuenta.get("eMail")?.setValue(cuenta.eMail);
    this.formRegCuenta.get("tipIde")?.setValue(cuenta.tipIde);
    this.formRegCuenta.get("ap1Cli")?.setValue(cuenta.ap1Cli);
    this.formRegCuenta.get("nom1Cli")?.setValue(cuenta.nom1Cli);
    this.formRegCuenta.get("tipPer")?.setValue(cuenta.tipPer);
    this.formRegCuenta.get("estCli")?.setValue(cuenta.estCli);
    this.formRegCuenta.get("codCliExtr")?.setValue(cuenta.codCliExtr);
    this.formRegCuenta.get("pagWeb")?.setValue(cuenta.pagWeb);

    this.mostrarFormulario = true;
  }

}
