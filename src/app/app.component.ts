import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public metro = [];
  
  public metroClick(mapEvent) {
 
      // sync data with metroMap click
      this.metro.forEach(item => {
  
        if (this.metro.indexOf(item.stationName) !== -1) {
          this.metro.push(item.stationName);
        } else {
          this.metro.splice(this.metro.indexOf(item.stationName), 1)  
        }
  
      });
      
  }
}
