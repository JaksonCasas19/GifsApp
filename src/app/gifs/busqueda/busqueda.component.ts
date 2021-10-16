import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  //Llamar al servicio
  constructor(private gifsService: GifsService){}

  buscar(){ 
    const valor = this.txtBuscar.nativeElement.value;

    //Si pulsa enter no retorna nada
    if(valor.trim().length === 0){
      return;
    }
    //Llamar la funcion buscarGifs desde el servicio
    this.gifsService.buscarGifs(valor);
    
    //Limpiar el input buscador
    this.txtBuscar.nativeElement.value = '';
  }

}
