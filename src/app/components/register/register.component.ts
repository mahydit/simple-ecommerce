import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MustMatch } from '../../../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null,[Validators.required, Validators.email,]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(null,[Validators.required,]),
    }
    // , {
      // validator: MustMatch('password', 'confirmPassword'),
  // }
  );
  }

  onSubmit(){
    console.log(this.registerForm);
    console.log(JSON.stringify(this.registerForm.value));   
  }

}

