import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaiseService } from '../../services/paise.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paiseService: PaiseService
    ) { }

  ngOnInit(){

    this.activatedRoute.params
      .pipe( switchMap( ({id}) => this.paiseService.getPaisPorAlpha( id )),
             tap( console.log ) 
      )
      .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {

    //     this.paiseService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
            
    //       })

    //   });

  }

}
