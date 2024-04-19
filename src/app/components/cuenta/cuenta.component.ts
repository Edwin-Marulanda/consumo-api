import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {

constructor(private authService: AuthService){

}
  
enviar(){
  let usuario:Usuario;

  usuario ={
    "userLogin": "pruebaTecnica",
    "password": "P@ssw0rd",
    "connectionName": "DataPower"
  }

  this.authService.login(usuario).subscribe(
    response => {
      // Maneja la respuesta del servidor, que probablemente contenga el token de acceso
      const token = response.token;
      // Haz algo con el token, como almacenarlo en el almacenamiento local o en una cookie
    },
    error => {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('Error al iniciar sesión:', error);
    }
  );

  }
}
