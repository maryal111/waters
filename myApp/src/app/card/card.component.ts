import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardPlans : any
  selectedCard:string = ""
  p: number = 1

  getColor(planName: any){
    switch(planName){  
      case "Starter":
        return 'green';
        case "Regular":
          return 'red';
        case "Professional":
          return 'blue';
        case "Ultimate":
          return 'purple';
        default:
          return
    }
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(card:any , i:any){
   this.selectedCard = card.planName

  this.cardPlans.forEach((card:any, i:any) => {
    if(card.planName === this.selectedCard){
      this.cardPlans[i].buttonClicked = !this.cardPlans[i].buttonClicked
    }
    else{
      card.buttonDisabled = !card.buttonDisabled
    }
  });
  }

}
