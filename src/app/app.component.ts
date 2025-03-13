import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from "./usuario/usuario.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioComponent, LoginComponent, RegisterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
  
})
export class AppComponent {
  title = 'angular-seminari6';
  loggedin: boolean = false;
  getLoggedIn(loggedin: boolean){
    this.loggedin = loggedin;
  }
}
