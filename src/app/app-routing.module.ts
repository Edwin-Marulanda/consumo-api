import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'cuentas', component: CuentaComponent,
    children: [
      { path: 'centas', component: CuentaComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
