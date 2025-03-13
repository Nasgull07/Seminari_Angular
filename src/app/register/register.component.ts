import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports : [CommonModule, ReactiveFormsModule],
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(9)]]
    });
  }
  UserService = inject(UserService);
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const loginData = this.registerForm.value;
    console.log(loginData);
    this.UserService.registerUser(loginData).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
      
      },
      error: (error) => {
        console.error('Error en el registro:', error);
      }
    });
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log('Formulario enviado', this.registerForm.value);
  }



  
}
