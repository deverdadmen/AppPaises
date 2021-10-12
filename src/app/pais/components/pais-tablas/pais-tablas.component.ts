import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tablas',
  templateUrl: './pais-tablas.component.html',
  styles: [
  ]
})
export class PaisTablasComponent implements OnInit {


  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
