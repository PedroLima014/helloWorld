import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() { }

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }
    return false;
  }

  buscar(chave: string) {
    if (chave.trim()){
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave:string){
    if (chave.trim()){
      delete this.bd[chave];
      return true;
    }
    return null;
  }

  addProdutoCarrinho(produto: any){
    if(!this.bd['carrinho']){
      this.bd['carrinho'] = [];
    }
    if(produto) {
      this.bd['carrinho'].push(produto);
    }

    console.log("Carrinho: ", this.bd['carrinho'])

    }
    removeProdutoCarrinho(posicao: number) {
      this.bd['carrinho'].splice(posicao, 1);
  }
}
