import { Component } from '@angular/core';
import { DishService } from '@app/admin-panel/services/api/dish.service';
// import { SlideModel } from '@app/client/components/carousel/slide-model';
import { RecommendationService } from '@app/client/services/api/recommendation.service';
import { Dish, RequestParams } from '@app/admin-panel/models/backend';
import { RecommendationByUser } from '@app/client/models/backend/recommendation';
import { SlideModel } from '@app/client/components/carousel/slide-model';
// import { SlideModel } from 'ffp-carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  slides: SlideModel[] = [];
  dishes: Dish[] = [];
  recommendations: RecommendationByUser;

  constructor(private dishService: DishService,
              private recommendationService: RecommendationService) {
    // this.initTop5Dishes();
    this.initRecommendations();
    this.loadItems();
  }

  private loadItems(): void {
    const requestParams: RequestParams = {
      pageIndex: 0,
      pageSize: 15
    };
    this.dishService.getAll$(requestParams).subscribe(response => {
      this.dishes = response.items;
    });
  }

  private initRecommendations(): void {
    this.recommendationService.getTop5ItemsByUserId$('832d6104-1b36-4e57-af17-8bc493d8d77d').subscribe(response => {
      this.recommendations = response;
      this.initTop5DishesByRecommendations();
    });
  }

  private initTop5DishesByRecommendations(): void {
    // this.recommendations.recommendedDishesIds.forEach(dishId => {
    //   this.dishService.getById$(dishId).subscribe(item => {
    //     this.slides.push({
    //       title: item.name,
    //       subtitle: item.category.name,
    //       description: item.description,
    //       imageUrl: item.imageUrl,
    //       labels: item.labels,
    //       // oldPrice: item.price,
    //       // newPrice: item.price * 0.8
    //     });
    //   });
    // });
  }

  private initTop5Dishes(): void {
    const requestParams: RequestParams = {
      pageIndex: 1,
      pageSize: 5
    };
    this.dishService.getAll$(requestParams).subscribe(response => {
      this.slides = response.items.map(item => {
        return {
          title: item.name,
          subtitle: item.category.name,
          description: item.description,
          imageUrl: item.imageUrl,
          labels: item.labels,
          oldPrice: item.price,
          newPrice: item.price * 0.8
        }
      });
    });
  }

}
