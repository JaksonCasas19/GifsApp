import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SearchGifsResponse,Gif} from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    private apiKey:string = 'XCkB0kXpgmV52gzyviWMbWxKrEONcG0T';

    private _historial: string[] = [];
    //TODO: Cambiar any por su tipo 
    public resultados: Gif[] = [];

    get historial(){
      return [...this._historial];
    }

    constructor(private http:HttpClient){}

    buscarGifs(query:string = ''){
      query = query.trim().toLowerCase(); //Convertir a minuscula

      //Si el query no existe lo incluye
      if(!this._historial.includes(query)){
        this._historial.unshift(query); //unshift->La ultima aparece al principio
        this._historial = this._historial.splice(0,10); //Corta la cantidad de array[]

        localStorage.setItem('historial', JSON.stringify(this._historial)); //Almacen en el local Storage
      }
      //Consumir API Gif
      //Pasar la interface en el Get - SearchGifsResponse (Genérico)
      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=XCkB0kXpgmV52gzyviWMbWxKrEONcG0T&q=dragon ball z&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        
      });
      //console.log(this._historial);
    }
}
