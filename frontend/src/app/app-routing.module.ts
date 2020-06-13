import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';


const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'registroalimento', component: RegistroAlimentosComponent},
  {path: 'registrosubcategoria', component: RegistroSubcategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
