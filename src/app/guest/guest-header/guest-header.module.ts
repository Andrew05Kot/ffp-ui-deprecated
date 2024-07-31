import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestHeaderComponent } from './guest-header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    GuestHeaderComponent
  ],
  exports: [
    GuestHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class GuestHeaderModule { }
