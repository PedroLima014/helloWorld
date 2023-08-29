import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  listaProdutos = [
    {nome: "Espada - Katana",
    descricao: "97cm - curvada com um unico fio de corte",
    valor: 117,
    foto: 'https://www.espadaskatana.com.br/wp-content/uploads/2017/09/Principal-1-300x300.jpg'
  },
    {
      nome: "Espada - Rapieira",
      descricao: "82cm - lâmina fina como uma agulha para estocadas",
      valor: 122,
      foto:"https://de.technolong.com/f/be16e728b620f39c219d216c014b72b3"
    },
    {
      nome:"Escudo - Sctum",
      descricao: "escudo grande de corpo de formato retangular",
      valor: 330,
      foto: "https://zetanmedieval.com/9906-thickbox_default/escudo-romano-scutum.jpg"
    },
    {
      nome: "Arco - Mongol",
      descricao: "grande com uma curva semelhante a um 'M' curvado",
      valor: 210,
      foto: "https://http2.mlstatic.com/D_NQ_NP_789813-MLB28790155051_112018-O.webp"
    },
    {
      nome:"Adaga - Cigana",
      descricao:"uma lâmina curta curvada na ponta com um fio",
      valor: 105,
      foto:"https://i.ebayimg.com/thumbs/images/g/bngAAOSwxLdgkSly/s-l640.jpg"
    },
  ];

qtdeItensCarrinho = 0

listasProdutos = [

];


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
