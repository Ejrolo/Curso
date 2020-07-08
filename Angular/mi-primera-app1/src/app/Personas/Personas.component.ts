import { Component } from '@angular/core';
@Component({
  selector: 'app-personas',
  templateUrl: './Personas.component.html',
  styleUrls: ['./Personas.component.css']
})


// tslint:disable-next-line: class-name
export class PersonasComponent {

agregarPersona = false ;
agregarPersonaStatus = 'No se ha agregado ninguna Persona';
tituloPersona = 'Ingeniero';

constructor(){
setTimeout(
  () => {
  this.agregarPersona = true;
}, 3000);

}

onCrearPersona(): void {
  this.agregarPersonaStatus = 'Persona Agregada';
}


onModificarPersona(event: Event): void {
this.tituloPersona = (<HTMLInputElement>event.target).value;

}


}
