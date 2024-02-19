import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  userFormGroup!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  login(){
    console.log("Login");
  }

  register(){
    console.log("Register");
  }

  handleLogin() {
    console.log("Login");
  }
}
