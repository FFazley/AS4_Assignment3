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
<<<<<<< HEAD
         IonButton, 
         IonCard,
         IonCardContent,
         IonImg,
         IonLabel,  
         IonIcon
        } from '@ionic/angular/standalone';
=======
         IonButton,
         IonIcon ,IonAvatar,IonFabButton,IonFab, IonImg } 
        from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart,trash,camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

>>>>>>> c359a595c0f993bf9e8e8bfc6b32c1995b1fb6b7

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule, 
            IonList, 
            IonItem, 
            IonInput, 
<<<<<<< HEAD
            IonButton,
            IonCard,
            IonCardContent,
            IonImg,
            IonLabel,
            IonIcon
            ],
=======
            IonButton,IonIcon,IonAvatar,IonFabButton,IonFab],
>>>>>>> c359a595c0f993bf9e8e8bfc6b32c1995b1fb6b7
})

export class ProfilepagePage implements OnInit {

  constructor( public photoService: PhotoService) {
    addIcons({
  
      'cart': cart,
      'trash':trash,
      'camera':camera
    });
   }

  
  ngOnInit() {
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}


