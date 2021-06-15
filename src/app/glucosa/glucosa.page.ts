import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import Swal from 'sweetalert2';
// import { Observable } from ;

const API_URL = 'http://localhost:3003';

@Component({
  selector: 'app-glucosa',
  templateUrl: './glucosa.page.html',
  styleUrls: ['./glucosa.page.scss'],
})
export class GlucosaPage {
  date_now: string = this.dateLabel();
  data_glucosa: string = "";
  public buttonValue;
  constructor() {    
  }

  public dateLabel() {
    var today = new Date();
    let mes : string =  (today.getMonth()+1).toString();
    let  dia : string = today.getDate().toString();
    let horas : string = today.getHours().toString();
    let minutos : string = today.getMinutes().toString();
    if(mes.length == 1){
       mes = `0${mes}`;
      
    }else if(dia.length == 1){
      dia =  `0${dia}`;
    } else if(horas.length == 1){
      horas =  `0${horas}`;
    }else if (minutos.length == 1){
      minutos =  `0${minutos}`;
    }
    var date = dia + '/'+ mes+ '/'+today.getFullYear();
    var time = horas + ":" + minutos;
    return '  '+date+' '+time;
    
  }

  public async medicionGlucosa() {
    let res = [];
    let respF;
    Swal.fire('Espere por favor');
    Swal.showLoading();

    while (res.length == 0) {
      const resp = await fetch(API_URL +'/data_glucosa',{
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
        console.log(respF); 
        if(Object.keys(respF[0]).length > 0) res.push(respF[0]['a']);
      } catch(e) {
        // console.log(e);
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
    this.data_glucosa = Number(res[0]).toFixed(2);
  }

  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public guardarGlucosa(){
    const date = this.dateLabel();
    console.log(date.toString());
    var split_date = date.split(" ");
    var estatus = "";
    var fecha = split_date[2];
    var aux_fecha = fecha.split("/");
    if(aux_fecha[0].toString().length <2){
      aux_fecha[0] = "0"+aux_fecha[0];
    }
    var fecha_final =  aux_fecha[0] + "/" + aux_fecha[1] + "/" +aux_fecha[2];
    console.log(fecha_final);
    const data = this.data_glucosa;
    var str_ = (<HTMLInputElement>document.getElementById("myTextArea")).value;
    console.log(fecha, data, str_);
    console.log(this.buttonValue);

    if(this.buttonValue === -1 ){
      estatus = "fa fa-smile-o";
    }else{
      estatus = "fa fa-frown-o";
    }

    const res = fetch(API_URL + '/save_presion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data_presion_alta: "",
        data_presion_baja: "",
        date: fecha_final,
        glucosa: data,
        status: estatus,
        comments: str_
      })
    }).then((res) => res.json())
    Swal.fire(
      'Se guardaron los datos correctamente!',
      'Consulte el historial para mas información',
      'success'
    )
    setTimeout(() => window.location.reload(), 1500);
    
    console.log("Resultado de la conexion", res);
  }
  
}
