import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  date_now_inicio: string = this.dateLabel();
  constructor() {}
  
  public dateLabel() {
    var today = new Date();
    var aux = today.toString();
    var split_date = aux.split(" ");
    var final_date = split_date[1] + " "+ split_date[2] + " "+split_date[3] + " , "+split_date[4];
    return final_date;
  }

}
