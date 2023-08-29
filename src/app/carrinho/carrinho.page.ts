import { Component } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss'],
})
export class CarrinhoPage {
  qtdeItensCarrinho = 0;
  total = 0;

  listaProdutos: any[] = [];

  constructor(private bdtempService: BdtempService) {}

  ionViewWillEnter() {
    // Obtenha os itens do carrinho e o qtdeItensCarrinho do serviço ao entrar na página
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho') || 0;
  }

  addProdutoCarrinho(produto: any) {
    this.bdtempService.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
    this.total = this.bdtempService.buscar('totalCarrinho');
  }

  removerItem(index: number) {
    this.bdtempService.removeProdutoCarrinho(index);
    this.atualizarInformacoesCarrinho();
  }

  limparCarrinho() {
    this.bdtempService.limparCarrinho();
    this.atualizarInformacoesCarrinho();
  }

  concluirCompra() {
    const carrinho = this.bdtempService.buscar('carrinho');

    if (carrinho && carrinho.length > 0) {
      // Aqui você pode realizar as ações necessárias para concluir a compra
      // Por exemplo, salvar a compra no banco de dados, exibir uma mensagem de sucesso, etc.
      this.bdtempService.limparCarrinho(); // Limpar o carrinho após a conclusão da compra
      console.log('Compra concluída com sucesso.');
    } else {
      console.log('Não é possível concluir a compra, carrinho vazio.');
    }
  }

  private atualizarInformacoesCarrinho() {
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.buscarDadosCarrinho();
  }
}
