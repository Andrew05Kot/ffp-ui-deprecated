import { Component } from '@angular/core';
// import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent {

    // constructor(private keycloakService: KeycloakService) {
    // }

  logout(): void {
    // this.keycloakService.logout();
  }
}
