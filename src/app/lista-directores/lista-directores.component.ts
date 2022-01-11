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

  @ViewChild('directorId',{static:false}) directorComponent!: DirectorComponent;
  flag=true;
  flag2=false;
  intens:any;
  asigs:any;
  constructor(private directorService: DirectorService, private route: ActivatedRoute) { 
  }
 ngOnInit(){
    /* 
    this.route.params.subscribe(
      (params: Params) => {
          this.directorService.getListaIntensificaciones().subscribe((intens: any) => {
            this.intens = intens;
         
          }
          
          )}
          
    )
    this.route.params.subscribe(
      (params: Params) => {
    this.directorService.getListaAsignaturas().subscribe((asigs: any) => {
      this.asigs = asigs;
   
    }
    )}
    )
  }
   */

  
    
 /*  abrirDirector(inte:string){
    this.flag=false;
    this.directorComponent.actualizarInterfaz(inte);
  }
   */

}
}
