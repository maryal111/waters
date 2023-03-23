import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  

  planTypes= [
  {
    id:1,
    planName: 'Starter',
    planPrice: '1',
    planDescription : 'Starter features for your business to grow',
    buttonClicked: false,
    buttonDisabled:false
  },

  {
    id:2,
    planName: 'Regular',
    planPrice: '25',
    planDescription : 'Regular features for your business to grow',
    buttonClicked: false,
    buttonDisabled:false
  },

  {
    id:3,
    planName: 'Professional',
    planPrice: '75',
    planDescription : 'Professional features for your business to grow',
    buttonClicked: false,
    buttonDisabled:false
  },

  {
    id:4,
    planName: 'Ultimate',
    planPrice: '25',
    planDescription : 'Regular features for your business to grow',
    buttonClicked: false,
    buttonDisabled:false
  },
]

  showPlanTypes() {
    return this.planTypes
  }

}
