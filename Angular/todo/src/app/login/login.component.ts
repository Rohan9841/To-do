import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "Invalid credentials";
  invalidCredential = false;

  constructor(private router:Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidCredential = false;
      this.router.navigate(['welcome',this.username]);
      console.log("logged in");
    }else{
      this.invalidCredential = true;
    }
  }

}
