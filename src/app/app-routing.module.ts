import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'brinqudos-infantis',
    loadChildren: () => import('./brinqudos-infantis/brinqudos-infantis.module').then( m => m.BrinqudosInfantisPageModule)
  },  {
    path: 'roupas',
    loadChildren: () => import('./roupas/roupas.module').then( m => m.RoupasPageModule)
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then( m => m.JogosPageModule)
  },
  {
    path: 'sapatos',
    loadChildren: () => import('./sapatos/sapatos.module').then( m => m.SapatosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
