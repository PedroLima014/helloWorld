import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  listaItens = [];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  bsucarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
  }

  ionViewWillEnter(){
    this.bsucarItensCarrinho();
  }

}
