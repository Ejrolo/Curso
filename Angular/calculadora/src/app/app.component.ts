import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  oA ;
  oB ;
suma ;

  onONumero(event: Event): void {
// tslint:disable-next-line: radix
this.oA = parseInt((event.target as HTMLInputElement).value);

// tslint:disable-next-line: radix
this.oB = parseInt((event.target as HTMLInputElement).value);



  }
onSuma(): void {

  const N = this;
  // tslint:disable-next-line: radix
  N.suma = parseInt(N.oA) + parseInt(N.oB);
}


}
