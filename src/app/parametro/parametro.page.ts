import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.page.html',
  styleUrls: ['./parametro.page.scss'],
})
export class ParametroPage implements OnInit {
  public id: string='';
  public producto: string='';
  public tipo: string='';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
   this.route.queryParams.subscribe(parametro =>{
    this.id=parametro['id'] || 'Sin id'
    this.producto=parametro ['producto'] || 'Sin producto'
    this.tipo=parametro ['tipo'] || 'Sin tipo'
   })
  }

}
