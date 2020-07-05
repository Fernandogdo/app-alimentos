import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlimentosComponent } from './registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './registro-subcategorias/registro-subcategorias.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { VisualizaAlimentoComponent } from './visualiza-alimento/visualiza-alimento.component';
import { EditaAlimentoComponent } from './edita-alimento/edita-alimento.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnavComponent } from './snav.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SnavComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registroalimento', component: RegistroAlimentosComponent },
    { path: 'registrosubcategoria', component: RegistroSubcategoriasComponent },
    { path: 'registrousuario', component: RegistroUsuariosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'registroalimento/:id', component: RegistroAlimentosComponent },
    { path: 'registrosubcategoria/:id', component: RegistroSubcategoriasComponent },
    { path: 'visualiza/:id', component: VisualizaAlimentoComponent },
    { path: 'edita-alimento/:id', component: EditaAlimentoComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
  ] }
];

export const SNAV_ROUTES = RouterModule.forChild(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes),],
  
// })
// export class AppRoutingModule { }
