import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    private _historial: string[] = [];

    get historial(){
      return [...this._historial];
    }
    buscarGifs(query:string = ''){
      query = query.trim().toLowerCase(); //Convertir a minuscula

      //Si el query no existe lo incluye
      if(!this._historial.includes(query)){
        this._historial.unshift(query); //unshift->La ultima aparece al principio
        this._historial = this._historial.splice(0,10); //Corta la cantidad de array[]
      }
      
      console.log(this._historial);
    }
}
