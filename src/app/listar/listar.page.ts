import { Component, OnInit } from '@angular/core';
import{Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  public navegarQuery(){
    this.router.navigate(
      ['/parametro'],{
        queryParams:{
          id:'1',
          producto:'Desktop',
          tipo:'gamer'
        }
      }
    )
  }

  ngOnInit() {
  }

}
