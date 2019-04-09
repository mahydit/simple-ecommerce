import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private streamService: StreamService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(8)])
    }
  );
  }

  onSubmit(){
    this.streamService.setAuthenticated("true");
    console.log(JSON.stringify(this.registerForm.value));
    this.router.navigate(['']);   
  }

}

