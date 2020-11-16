import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myang-app';

  colors = {
    red: '#FF0000',
    orange : '#FF7F00',
    yellow: '#FFFF00',
    green: '#00FF00',
    blue: '#00FFFF',
    darkblue: '#0000FF',
    purple: '#8B00FF',
    indianRed: '#CD5C5C',
    limeGreen: '#32CD32',
    lightSalmon: '#FFA07A',
    springGreen: '#00FF7F',
    paleVioletRed: '#DB7093',
    olive: '#808000',
    coral: '#FF7F50',
    teal: '#008080',
    darkKhaki: '#BDB76B',
    steelBlue: '#4682B4',
    blueViolet: '#8A2BE2',
    rosyBrown: '#BC8F8F',
    dimGrey: '#696969',
    sienna: '#A0522D',
    navy: '#000080',
  };

  colorClass = 'normal-table'; // приравниваю к выражению
  hideColor = () => {
    this.colorClass = this.colorClass === 'normal-table' ? 'hidden-table' : 'normal-table';
  }

}