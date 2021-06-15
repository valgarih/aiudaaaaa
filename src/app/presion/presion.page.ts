import { Component, OnInit, Injectable } from '@angular/core';
import { $ } from 'protractor';
import { ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Socket } from 'ngx-socket-io';
const API_URL = 'http://localhost:3002';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})

export class PresionPage implements OnInit {
  // constructor(private socket: Socket) {}

  ngOnInit(): void {
    // this.socket.connect();
    
    // this.socket.on("connection", (res) => {
    //   console.log("conecto");
    // });

    // this.socket.on("connect_error", (err) => {
    //   console.log(`connection_error due to ${err.message}`);
    // });
  }

  date_now: string = this.dateLabel();
  medicion_presion: string = "118/82";
  public buttonValue;

  message = '';
  messages = [];
  currentUser = '';


  public dateLabel() {
    var today = new Date();
    let mes: string = (today.getMonth() + 1).toString();
    let dia: string = today.getDate().toString();
    let horas: string = today.getHours().toString();
    let minutos: string = today.getMinutes().toString();
    if (mes.length == 1) {
      mes = `0${mes}`;

    } else if (dia.length == 1) {
      dia = `0${dia}`;
    } else if (horas.length == 1) {
      horas = `0${horas}`;
    } else if (minutos.length == 1) {
      minutos = `0${minutos}`;
    }
    var date = dia + '/' + mes + '/' + today.getFullYear();
    var time = horas + ":" + minutos;
    return '  ' + date + ' ' + time;

  }

  public async medicionPresion() {
    let res = [];
    let respF;
    Swal.fire('Espere por favor');
    Swal.showLoading();
    while (res.length == 0) {
      const resp = await fetch(API_URL +'/data_presion',{
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          val: "0"
        })
      });
      
      try {
        respF = await resp.json();
        console.log(await resp.json()); 
        if(Object.keys(respF[0]).length > 0) res.push(respF[0]['a']);
      } catch(e) {
        console.log(e);
      }      
      await this.delay(3000);
    }
    Swal.close();
    console.log(res[0]);
    await fetch(API_URL + "/borrar_dato", {
      method: 'DELETE',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        val: "0"
      })
    });
  }


  public guardarPresion() {
    const date = this.dateLabel();
    const data = this.medicion_presion;
    var split_data = data.split("/");
    var data_presion_alta = split_data[1];
    var data_presion_baja = split_data[0];
    console.log(date, data_presion_alta, data_presion_baja);
    var str_ = (<HTMLInputElement>document.getElementById("myTextArea")).value;
    console.log(str_);
    console.log(this.buttonValue);

    const res = fetch(API_URL + '/save_presion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dato_prueba: "prueba"
      })
    }).then((res) => res.json())
    console.log("Resultado de la conexion", res);
  }

  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}