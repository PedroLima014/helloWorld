import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-escudos',
  templateUrl: './escudos.page.html',
  styleUrls: ['./escudos.page.scss'],
})
export class EscudosPage implements OnInit {
  listaProdutos = [
    {nome: "Escudo - Sctum",
    descricao: "Escudo romano de corpo todo",
    valor: 330,
    foto: "https://zetanmedieval.com/9906-thickbox_default/escudo-romano-scutum.jpg"
  },
    {
      nome: "Escudo - Broquel",
      descricao: "Escudo pequeno de pulso para combates com mobilidade",
      valor: 240,
      foto: "https://static.wikia.nocookie.net/the-maze/images/4/41/Escudo_de_Coura%C3%A7a_2.jpg/revision/latest?cb=20220405140728&path-prefix=pt-br"
    },
    {
      nome:"Escudo - Aquecedor",
      descricao: "Escudo medieval em formato de gota invertida",
      valor: 176,
      foto: "https://3.bp.blogspot.com/-Vzsa2ZjW9lA/Tf1cLpTtnBI/AAAAAAAAAe4/303gs49WhGc/s1600/kite%2B2.jpg"
    },
  ];

  qtdeItensCarrinho = 0

    constructor(public bdtemp: BdtempService) { }

    ngOnInit() {
    }

    addProdutoCarrinho(produto: any){
      this.bdtemp.addProdutoCarrinho(produto);
      this.buscarDadosCarrinho();
    }

    buscarDadosCarrinho(){
      this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
    }


}
