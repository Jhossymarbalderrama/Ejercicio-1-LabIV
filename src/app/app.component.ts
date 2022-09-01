import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  edadUno: string = "";
  EdadDos: string = "";

  promedio: string = "";
  suma: string = "";

  //   1- (app.component.html) Realizar:
  // una aplicacion que se le ingresen dos edades en dos cuadro de textos
  // edadUno, EdadDos
  // mostrar el promedio y la suma en dos cuadros de textos nuevos
  // botones "calcular" y "limpiar cuadros de textos"

  ngOnInit(): void {
  }

  calcular(): void{    
     let p_valor = parseInt(this.edadUno);
     let s_valor = parseInt(this.EdadDos);

    this.calcularPromedio(p_valor+s_valor);
    this.calcularSumaDeDos(p_valor,s_valor);  
  }

  limpiar():void {
    this.edadUno = "";
    this.EdadDos = "";
    this.promedio = "";
    this.suma = "";
  }

  calcularPromedio(suma: number){   
    this.promedio = (suma / 2).toString();
  }

  calcularSumaDeDos(p_valor: number, s_valor: number){
    this.suma = (p_valor + s_valor).toString();
  }
}
