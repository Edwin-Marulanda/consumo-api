import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
