import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule,MatIconModule,MatSelectModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  hide = true
  fb= inject(FormBuilder);
  registerForm!: FormGroup;
  router =inject(Router);
  confirmPasswordHide!: boolean;
  passwordHide!: boolean;
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
      fullName:['',[Validators.required]],
      roles: [''],
      confirmPassword:['',[Validators.required]]
    })
  }
}
