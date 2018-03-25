import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent{

  @Input() color = '#127bdc';
  @Input() size ='150';
  @Input() radius = '0';

  constructor() { }

  itemStyle(){
  	return {
      'transition-property': 'all',
      'transition-duration': '0.5s',
      'transition-timing-function': 'ease-in-out',
  		'margin-left':'50%',
  		'transform':'translateX(-50%)',
  		'background-color':this.color,
  		'width':this.size+'px',
  		'height':this.size+'px',
  		'border-radius':this.radius

  	}
  }

}
