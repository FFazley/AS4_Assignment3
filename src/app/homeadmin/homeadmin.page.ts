import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBadge, IonMenuButton, IonIcon,
  IonButton, IonItem, IonFooter, IonLabel, IonCard, IonList, IonRow, IonCol, IonGrid, IonMenu, IonSearchbar, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonApp, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, heartOutline, cartOutline ,cart,trash} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
  standalone: true,
  imports: [IonImg, IonApp, IonCardSubtitle, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, 
    IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonBadge, IonMenuButton, IonIcon, IonFooter, IonLabel, IonCard, IonList, IonRow, IonCol, IonGrid, IonMenu,IonCardTitle,IonCardHeader,IonCardContent,IonCardSubtitle,IonBadge], 
  
})
export class HomeadminPage implements OnInit {
  productOfTheDay: any;
  product_Popular: any;
  Product_Trending: any;

  constructor(private router: Router) {
    this.productOfTheDay = [{
      image: 'assets/img/food1.jpg',
      name: 'Product Name',
      price: 29.99,
      rating: 5
    }];

    this.product_Popular = [
      {
        image: 'assets/img/food1.jpg',
        name: 'Popular Product 1',
        price: 19.99,
        rating: 4
      },
      {
        image: 'assets/img/food2.jpg',
        name: 'Popular Product 2',
        price: 24.99,
        rating: 3
      }
    ];

    this.Product_Trending = [
      {
        image: 'assets/img/food3.jpg',
        name: 'Trending Product 1',
        price: 34.99,
        rating: 5
      },
      {
        image: 'assets/img/food4.jpg',
        name: 'Trending Product 2',
        price: 44.99,
        rating: 4
      }
    ];
  
  
    addIcons({
      'home-outline': homeOutline,
      'heart-outline': heartOutline,
      'cart-outline': cartOutline,
      'cart': cart,
      'trash':trash
    });
  
  };

  ngOnInit() {
    // You can fetch the product data here from an API or service
  }

  openProductDetails(product: any, category: string) {
    // Handle navigation to product details page
    // Pass necessary data using query params or a state management solution
    this.router.navigate(['/product-details'], {
      queryParams: {
        product: JSON.stringify(product),
        category: category
      }
    });
  }
}