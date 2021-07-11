import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  /*   constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  } */

  heroes: string[] = ['Mujer Maravilla', 'Ironman', 'Superman', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // console.log('Borrando');

    this.heroeBorrado = this.heroes.shift() || '';
  }
}
