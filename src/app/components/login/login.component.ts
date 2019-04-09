import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private streamService: StreamService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit(){
    this.streamService.setAuthenticated("true");
    console.log(JSON.stringify(this.loginForm.value));
    this.router.navigate(['']);   
  }

}
