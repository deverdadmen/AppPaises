import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiseService } from '../../services/paise.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  
  regiones: string[] = ['eu' ,'efta' ,'caricom' ,'pa' ,'au' ,'usan' ,'eeu' ,'al' ,'asean' ,'cais' ,'cefta' ,'nafta' ,'saarc'];
  regionActiva: string = '';
  constructor (private paisService: PaiseService) { }



  ngOnInit(): void {
  }

  getClaseCSS( region: string): string{
    return (region === this.regionActiva)? 'btn btn-primary me-1' : 'btn btn-outline-primary me-1';
  }

  activarRegion( region: string ) {

    if( region === this.regionActiva ){ return;}
    this.regionActiva = region;
    this.paises = [];
    this.hayError = false;
    this.termino = region;
    
    this.paisService.buscarPais( this.termino )
      .subscribe( (paises)=> {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  }

}
