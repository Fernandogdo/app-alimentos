import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VisualizaAlimentoComponent } from './components/visualiza-alimento/visualiza-alimento.component';
import { EditaAlimentoComponent } from './components/edita-alimento/edita-alimento.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
  // { path: 'sidenav', component: SidenavComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'registroalimento', component: RegistroAlimentosComponent },
  // { path: 'registrosubcategoria', component: RegistroSubcategoriasComponent },
  // { path: 'registrousuario', component: RegistroUsuariosComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'registroalimento/:id', component: RegistroAlimentosComponent },
  // { path: 'registrosubcategoria/:id', component: RegistroSubcategoriasComponent },
  // { path: 'visualiza/:id', component: VisualizaAlimentoComponent },
  // { path: 'edita-alimento/:id', component: EditaAlimentoComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: false } );

// @NgModule({
//   imports: [RouterModule.forRoot(routes),],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
