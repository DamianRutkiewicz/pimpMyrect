import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent{

  color: string = "#127bdc";
  size: string = "150";
  borderRadius: string = "0";
  @Input() galleryArray;

  @Output() sizeEvent = new EventEmitter();
  @Output() radiusEvent = new EventEmitter();
  @Output() colorEvent = new EventEmitter();

  constructor() { }

  changeSize($ev){
    this.size = $ev.target.value;
    this.sizeEvent.emit(this.size);
  }
  changeRadius($ev){
    this.borderRadius = $ev.target.value;
    this.radiusEvent.emit(this.borderRadius);
  }
  changeColor($ev){
    this.colorEvent.emit(this.color);
  }

  save(){
    this.galleryArray.push(this.makeObject());
    localStorage.setItem('gallery',JSON.stringify(this.galleryArray));
  }

  makeObject(){
    return {
      'color':this.color,
      'size': this.size,
      'radius':this.borderRadius
    }
  }

}
