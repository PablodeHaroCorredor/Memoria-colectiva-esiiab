import { Component, OnInit } from '@angular/core';
import { ApiCallServiceService } from '../api-call-service.service';

@Component({
  selector: 'app-intesificaciones',
  templateUrl: './intensificaciones.component.html',
  styleUrls: ['./intensificaciones.component.css'],
  
})
export class IntensificacionesComponent implements OnInit {
  title = 'Intensificaciones de la escuela';
  constructor(private service: ApiCallServiceService) { }

  ngOnInit(): void {
  }

  // getData(){
  //   this.service.get().subscribe((response)=>{
  //     console.log('Response from API is ', response)
  //   },(error)=>{
  //     console.log('Error is ', error);
      
  //   })
  // }
}




  