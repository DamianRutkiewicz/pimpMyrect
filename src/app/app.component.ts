import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pimp my rect :)';

  size:string = '200';
  radius: string = '0';
  color: string = '#127bdc';
  galleryArray;

  ngOnInit(){
  	// localStorage.clear();
  	this.galleryArray = JSON.parse(localStorage.getItem('gallery')) || [];
  }

  receiveSize($event){
  	this.size = $event;
  }
  receiveRadius($event){
  	this.radius = $event +"px";
  }
  receiveColor($event){
  	this.color = $event;
  }
}
