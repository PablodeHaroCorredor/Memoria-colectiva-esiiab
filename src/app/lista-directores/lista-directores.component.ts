import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DirectorComponent } from '../director/director.component';
import { DirectorService } from '../servicios/director.service';

@Component({
  selector: 'app-lista-directores',
  templateUrl: './lista-directores.component.html',
  styleUrls: ['./lista-directores.component.css']
})
export class ListaDirectoresComponent implements OnInit {

  flag=true;
  flag2=false;
  directores:any
  nombresDirector:any
  constructor(private directorService: DirectorService, private route: ActivatedRoute) { 
  }
 ngOnInit(){
    
    this.route.params.subscribe(
      (params: Params) => {
          this.directorService.getDirectores().subscribe((directores: any) => {
            this.directores = directores;
            this.nombresDirector =this.getNombreDirector()
          }
          
          )} 
         
    )
    
  }

  getNombreDirector(){
    var lista:string[] =[]
    for(let director of this.directores){
      lista.push(director.nombre)
    }

    return lista
  }



   

  
 

}

