import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{

  @Input() galleryArray;

  constructor() { }

  remove(index){
    this.galleryArray.splice(index, 1);
    localStorage.setItem('gallery',JSON.stringify(this.galleryArray));
  }

}
