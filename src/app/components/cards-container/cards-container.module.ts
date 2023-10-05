import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from '@app/components/cards-container/cards-container.component';

@NgModule({
  declarations: [
    CardsContainerComponent
  ],
  exports: [
    CardsContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsContainerModule { }
