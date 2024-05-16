import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() { 
    this.loadSaved();
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    if (capturedPhoto.webPath) {
      const savedImageFile = await this.savePicture(capturedPhoto);
      if (savedImageFile.webviewPath) {
        this.photos.unshift(savedImageFile);
      }

      Storage.set({
        key: 'photos',
        value: JSON.stringify(this.photos)
      });
    }
  }

  private async loadSaved() {
    const photos = await Storage.get({ key: 'photos' });
    this.photos = photos.value ? JSON.parse(photos.value) : [];
  }

  private async savePicture(cameraPhoto: Photo) {
  const base64Data = await this.readAsBase64(cameraPhoto);

  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath || ''
  };
}

  private async readAsBase64(cameraPhoto: Photo) {
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}