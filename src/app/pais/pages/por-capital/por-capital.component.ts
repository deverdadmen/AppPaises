import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiseService } from '../../services/paise.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaiseService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital( this.termino )
      .subscribe( (paises)=> {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  }

  sugerencias( termino: string) {
    this.hayError = false;

  }
}
