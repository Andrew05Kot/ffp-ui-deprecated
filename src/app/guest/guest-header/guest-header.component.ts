import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { KeycloakService } from 'keycloak-angular';
// import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.scss']
})
export class GuestHeaderComponent implements OnInit  {

  public isLoggedIn = false;
  // public userProfile: KeycloakProfile | null = null;

  constructor(
    // private keycloak: KeycloakService,
    private router: Router
  ) {}

  public async ngOnInit() {
    // this.isLoggedIn = await this.keycloak.isLoggedIn();

    // if (this.isLoggedIn) {
      // this.userProfile = await this.keycloak.loadUserProfile();
      // console.log('this.userProfile >>> ', this.userProfile)
    // }
  }

  async login(): Promise<void> {
  //   try {
  //     await this.keycloak.login({
  //       redirectUri: window.location.origin + this.router.url
  //     });
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  }

}
