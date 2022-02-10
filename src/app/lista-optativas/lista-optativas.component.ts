import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-optativas',
  templateUrl: './lista-optativas.component.html',
  styleUrls: ['./lista-optativas.component.css']
})
export class ListaOptativasComponent implements OnInit {

  optativas:string[] =["Visión Artificial y Reconocimiento de Patrones","Criptografia", "Robótica Autónoma", 
  "Auditoría en Sistemas de Información", "Ingeniería Web y de Servicios", "Dispositivos y Redes Inalámbricos", "Aceleradores Gráficos",
   "Diseño Gráfico y Animación", "Inteligencia Artificial en Videojuegos", "Videojuegos y Realidad Virtual"]
  constructor() { }

  ngOnInit(): void {
  }

}
