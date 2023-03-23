import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  plans:any;

  constructor( private dataService: DataServiceService){
    this.plans = this.dataService.showPlanTypes();
  }
}
