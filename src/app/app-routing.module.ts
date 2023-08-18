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
    path: 'escudos',
    loadChildren: () => import('./escudos/escudos.module').then( m => m.EscudosPageModule)
  },
  {
    path: 'espadas',
    loadChildren: () => import('./espadas/espadas.module').then( m => m.EspadasPageModule)
  },
  {
    path: 'arcos',
    loadChildren: () => import('./arcos/arcos.module').then( m => m.ArcosPageModule)
  },
  {
    path: 'adagas',
    loadChildren: () => import('./adagas/adagas.module').then( m => m.AdagasPageModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
