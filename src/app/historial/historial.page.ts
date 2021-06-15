import { Component, OnInit } from '@angular/core';
const API_URL = 'http://localhost:3003';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  date_now_inicio: Date;
  index: number = 3;
  nums:number[];
  fecha: String = "";
  items = [];
  public myDate;
  constructor() { }

  ngOnInit() {
    this.date_now_inicio = this.dateLabel();
    console.log(this.date_now_inicio);
  }

  showdate(){
    this.fecha = this.convertDate(this.myDate);
    this.getPresion(this.fecha);
    
  }

  public  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }

  public dateLabel() {
    var today = new Date();
    this.nums = [5,7,8,9];
    return today;
  }

  public async getPresion(date: String){
    let respF;
    const resp =  await fetch(API_URL +'/get_presion',{
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fechabusqueda: date
      })

    });
    try {
      respF = await resp.json();
      this.items = respF; 
      console.log(respF);
    } catch(e) {
      // console.log(e);
    }  
    
  }

}
