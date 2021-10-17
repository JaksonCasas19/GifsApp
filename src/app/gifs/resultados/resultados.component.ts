import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{
  
  /*loader:Boolean = true;*/

  load():boolean{
    return this.gifsService.loader;
  }

  get resultados(){
    return this.gifsService.resultados;
  }


  constructor(private gifsService: GifsService) { }


}
