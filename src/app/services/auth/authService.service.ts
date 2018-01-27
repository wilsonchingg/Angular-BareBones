import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  /**
   * When the service is initialized, check if the user is logged in
   */
  constructor() {
    this.validateJWT = this.validateJWT.bind(this);
    Promise.resolve(this.validateJWT());
  }

  /**
   * Check if the jwt token in storage (if existed) is valid
   * @return {Promise<boolean>}  - true if the jwt is valid, otherwise false
   */
  validateJWT() {
    return new Promise<boolean>((resolve) => {
      if (!sessionStorage.getItem('jwt')) {
        resolve(false);
      } else {
        //TODO: server side logic
        resolve(true)
      }
    });
  }
  /**
   * Set the isLoggedIn state to true
   */
  login(): void {
    this.isLoggedIn = true;
  }

  /**
   * Remove jwt token
   */
  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('jwt');
  }
}
