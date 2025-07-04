import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone:true
})
export class LoginPageComponent {
loginFrom!:FormGroup;
isSubmitted=false;

constructor(){}


}
