import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CarouselModule } from '@app/client/components/carousel/carousel.module';
import { ClientModule } from '@app/client/client.module';
import { DishesModule } from '@app/admin-panel/pages/dishes/dishes.module';
// import { FfpCarouselComponent } from 'ffp-carousel';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule,
    ClientModule,
    DishesModule,
    // FfpCarouselComponent
  ]
})
export class HomePageModule { }
