import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {

    if (username === "Rohan9841" && password === "Rapper9841") {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
