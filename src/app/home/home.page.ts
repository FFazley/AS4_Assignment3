import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CartService } from './services/cart.service'; // Adjust the path as needed

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Adjust the path as needed
})
export class HomeComponent {
  productOfTheDay = [/* your product of the day data */];
  product_Popular = [/* your popular products data */];
  Product_Trending = [/* your trending products data */];

  constructor(public cartService: CartService) {}

  openProductDetails(product: any, category: string) {
    // your logic to open product details
  }
}
