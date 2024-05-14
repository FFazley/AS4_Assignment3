import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBadge,IonMenuButton,IonIcon, IonButton, IonItem,IonFooter,IonLabel,IonCard,IonList,IonRow,IonCol,IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBadge,IonMenuButton,IonIcon,IonFooter,IonLabel,IonCard,IonList,IonRow,IonCol,IonGrid]
})
export class HomePage implements OnInit {
openProductDetails(arg0: any,arg1: string) {
throw new Error('Method not implemented.');
}
productOfTheDay: any;
product_Popular: any;
Product_Trending: any;

  constructor() { }

  ngOnInit() {
  }

}
