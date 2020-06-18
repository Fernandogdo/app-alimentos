import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
import { VisualizaAlimentoComponent } from './components/visualiza-alimento/visualiza-alimento.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'registroalimento/:id', component: RegistroAlimentosComponent},
  {path: 'registrosubcategoria/:id', component: RegistroSubcategoriasComponent},
  {path: 'visualiza/:id', component: VisualizaAlimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
