import { Component } from '@angular/core';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { Dish } from '@app/admin-panel/models/backend';
import { SlideModel } from '@app/client/components/carousel/slide-model';
// import { SlideModel } from 'ffp-carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  dishes: Dish[] = [];
  sortedDishes: Dish[] = [];
  slides: SlideModel[] = [];

  mockSlides: SlideModel[] = [
    // {
    //   title: 'Cheeseburger',
    //   subtitle: 'Burger',
    //   description: 'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition. As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, and mustard.',
    //   imageUrl: 'https://www.mcdonalds.com.sg/sites/default/files/2023-02/1200x1200_MOP_BBPilot_Cheeseburger_1.png'
    // },
    // {
    //   title: 'Bacon Cheeseburger',
    //   subtitle: 'Burger',
    //   description: 'This burger takes things to the next level with crispy bacon and melted cheese on top of a juicy patty.',
    //   imageUrl: 'https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1633113774/oa_menu/products/menuthumbnail_burger_bacon-cheeseburger.png'
    // },
    // {
    //   title: 'Cheese Pizza',
    //   subtitle: 'Pizza',
    //   description: 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.',
    //   imageUrl: 'https://www.cicis.com/media/d21b0xj1/mac-and-cheese-pizza.png'
    // },
    // {
    //   title: 'Veggie Pizza',
    //   subtitle: 'Pizza',
    //   description: 'When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.',
    //   imageUrl: 'https://www.cicis.com/media/nctfaewb/veggie-pizza.png'
    // },
    // {
    //   title: 'Pepperoni Pizza',
    //   subtitle: 'Pizza',
    //   description: 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?',
    //   imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/403/original/pepperoni-pizza-isolated-illustration-ai-generative-free-png.png'
    // },
    // {
    //   title: 'Breakfast Burrito',
    //   subtitle: 'Breakfast',
    //   description: 'Start your day off right with this breakfast burrito filled with scrambled eggs, cheese, potatoes, and your choice of bacon or sausage.',
    //   imageUrl: 'https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1622138834/oa_menu/products/menuproduct_breakfast_burrito-sausage-egg-cheese-jr.png'
    // }
  ];

  constructor(private dishService: DishService) {
    this.loadItems();
  }

  private loadItems(): void {
    this.dishService.getAllUnpaged$().subscribe(response => {
      this.dishes = response;
      this.sortedDishes = response;
      this.initTop5DishesByRecommendations();
    });
  }

  private initTop5DishesByRecommendations(): void {
    this.sortedDishes.sort((a, b)  => {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1
      }
      return 0;
    });
    // for (let i = 0; i < 5; i++) {
    //   this.slides.push({
    //     title: this.sortedDishes[i].name,
    //     subtitle: this.sortedDishes[i].category.name,
    //     description: this.sortedDishes[i].description,
    //     imageUrl: this.sortedDishes[i].imageUrl,
    //     labels: this.sortedDishes[i].labels,
    //     // oldPrice: this.sortedDishes[i].price,
    //     // newPrice: this.sortedDishes[i].price * 0.8
    //   });
    // }
  }

}
