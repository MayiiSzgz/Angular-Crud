import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';
//Arreglo de datos
  employees = [
    {'name': 'fAZT', position: 'manager'},
    {'name': 'Juan', position: 'Designer'},
    {'name': 'Pedro,', position: 'Programmer'}
  ];
  //el objeto contendra los datos temporalemnte para poder modificarlos y luego agregarlos al arreglo de empleados
   
  model:any = {};

  //Permitira agregar empleados al arreglo de arrib
  addEmployee():void
  {
    this.employees.push(this.model);

  }
  //Eliminara datos del arreglo
  deleteEmployee():void
  {

  }
  //Traera los datos que estan en el arreglo para preparar los datos para editarlo
  editEmployee():void
  {

  }
  //Este metodo si actualizara los datos
  updateEmployee():void
  {

  }
}
