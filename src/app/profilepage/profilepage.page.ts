import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
         IonHeader, 
         IonTitle, 
         IonToolbar, 
         IonList, 
         IonItem, 
         IonInput, 
         IonButton, 
         IonCard,
         IonCardContent,
         IonImg,
         IonLabel,  
         IonIcon
        } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
  standalone: true,
  imports: [IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule, 
            IonList, 
            IonItem, 
            IonInput, 
            IonButton,
            IonCard,
            IonCardContent,
            IonImg,
            IonLabel,
            IonIcon
            ],
})
export class ProfilepagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
