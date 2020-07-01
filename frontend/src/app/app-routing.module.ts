import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VisualizaAlimentoComponent } from './components/visualiza-alimento/visualiza-alimento.component';
import { VisualizaUsuariosComponent } from './components/visualiza-usuarios/visualiza-usuarios.component';
import { EditUsuariosComponent } from './components/edit-usuarios/edit-usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registroalimento', component: RegistroAlimentosComponent },
  { path: 'registrosubcategoria', component: RegistroSubcategoriasComponent },
  { path: 'registrousuario', component: RegistroUsuariosComponent },
  { path: 'editarusuario/:id', component: EditUsuariosComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'visualizarusuarios', component: VisualizaUsuariosComponent },
  { path: 'registroalimento/:id', component: RegistroAlimentosComponent },
  { path: 'registrosubcategoria/:id', component: RegistroSubcategoriasComponent },
  { path: 'visualiza/:id', component: VisualizaAlimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
