import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  formLogin;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      userName: ['pruebaTecnica'],
      password: ['P@ssw0rd'],
      connectionName: ['DataPower'],
    });

    this.formLogin.disable();
  }

  public login() {
    this.router.navigateByUrl("/cuentas")
    let usuario = {
      "userLogin": "pruebaTecnica",
      "password": "P@ssw0rd",
      "connectionName": "DataPower"
    }
    this.authService.login(usuario).subscribe({
      next: data => {
        const token = data.token;
        localStorage.setItem('token', token);

      },
      error: error => {
        console.log(error)
      }
    })
  }
}
