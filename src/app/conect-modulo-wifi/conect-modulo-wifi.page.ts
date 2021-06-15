import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
const API_URL = 'http://localhost:3003';
@Component({
  selector: 'app-conect-modulo-wifi',
  templateUrl: './conect-modulo-wifi.page.html',
  styleUrls: ['./conect-modulo-wifi.page.scss'],
})
export class ConectModuloWifiPage implements OnInit {
  items = [];
  fechas = [];
  type;
  data;
  options;

  type_2;
  data_2;
  options_2;

  constructor() { }

  ngOnInit() {
    this.getDatos();
  }

public graficaPresion(param, p_alta, p_baja){
  this.type = 'bar';
  this.data = {
    labels: param,
    datasets: [
      {
        label: 'Presión Sistolica',
        data: p_alta,
        borderColor: [
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',

      ],
        backgroundColor:[
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',
          'rgba(227, 85, 82, 0.8)',

      ],
      },
      {
        label: 'Presión Diastolica',
        data: p_baja,
        borderColor: [
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
      ],
        backgroundColor: [
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
          'rgba(77, 220, 234, 0.8)',
      ],
      }
    ]
  };
  this.options= {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };
}
  

public graficaGlucosa(param, param2){
  this.type_2 = 'bar';
  this.data_2 = {
    labels: param,
    datasets: [
      {
        label: 'Glucosa',
        data: param2,
        borderColor: [
          'rgba(227, 85, 82, 0.8)',
          'rgb(255, 235, 205, 0.8)',
          'rgb(222, 184, 135, 0.8)',
          'rgb(255, 127, 80, 0.8)',
          'rgb(169, 169, 169, 0.8)',
          'rgb(139, 0, 139, 0.8)',
          'rgb(47, 79, 79, 0.8)',
          'rgb(30, 144, 255, 0.8)',
          'rgb(218, 165, 32, 0.8)',
          'rgb(240, 128, 128, 0.8)',
          'rgb(144, 238, 144, 0.8)',
          'rgb(32, 178, 170, 0.8)',
          'rgb(176, 196, 222, 0.8)',
          'rgb(107, 142, 35, 0.8)',
          'rgb(221, 160, 221, 0.8)',


      ],
        backgroundColor:[
          'rgba(227, 85, 82, 0.8)',
          'rgb(255, 235, 205, 0.8)',
          'rgb(222, 184, 135, 0.8)',
          'rgb(255, 127, 80, 0.8)',
          'rgb(169, 169, 169, 0.8)',
          'rgb(139, 0, 139, 0.8)',
          'rgb(47, 79, 79, 0.8)',
          'rgb(30, 144, 255, 0.8)',
          'rgb(218, 165, 32, 0.8)',
          'rgb(240, 128, 128, 0.8)',
          'rgb(144, 238, 144, 0.8)',
          'rgb(32, 178, 170, 0.8)',
          'rgb(176, 196, 222, 0.8)',
          'rgb(107, 142, 35, 0.8)',
          'rgb(221, 160, 221, 0.8)',

      ],
      },
    ]
  };
  this.options_2= {
    responsive: true,
    legend:
    {
        display: false
    }
  };
}
  


  public async getDatos(){
    let respF;
    const resp =  await fetch(API_URL +'/get_data_graficas',{
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fechabusqueda: "hola"
      })

    });
    try {
      respF = await resp.json();
      this.items = respF;
      var glucosa = [];
      var p_alta = [];
      var p_baja = [];
      for(var i = 0; i < this.items.length; i ++){
        this.fechas.push(this.items[i].date);
        glucosa.push(this.items[i].glucosa);
        p_alta.push(this.items[i].data_presion_alta);
        p_baja.push(this.items[i].data_presion_baja);
      }
      
      console.log(respF);
      this.graficaPresion(this.fechas, p_alta, p_baja);
      this.graficaGlucosa(this.fechas, glucosa);
    } catch(e) {
      // console.log(e);
    }  
    
  }
}
