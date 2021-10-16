import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    private apiKey:string = 'XCkB0kXpgmV52gzyviWMbWxKrEONcG0T';

    private _historial: string[] = [];
    //TODO: Cambiar any por su tipo 
    public resultado: any[] = [];

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
      }
      //Consumir API Gif
      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=XCkB0kXpgmV52gzyviWMbWxKrEONcG0T&q=dragon ball z&limit=10`)
      .subscribe((resp:any) => {
        console.log(resp.data);
        this.resultado = resp.data;
      });
      //console.log(this._historial);
    }
}
