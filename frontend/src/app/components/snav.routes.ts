import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlimentosComponent } from './registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './registro-subcategorias/registro-subcategorias.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { VisualizaAlimentoComponent } from './visualiza-alimento/visualiza-alimento.component';
import { VisualizaUsuariosComponent } from './visualiza-usuarios/visualiza-usuarios.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditaAlimentoComponent } from './edita-alimento/edita-alimento.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnavComponent } from './snav.component';
import {LoginGuard} from '../guards/login.guard'
import { AdminGuard } from '../guards/admin.guard';
import { AccessWebGuard } from '../guards/access-web.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SnavComponent, children: [
    { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'registroalimento', component: RegistroAlimentosComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'registrosubcategoria', component: RegistroSubcategoriasComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'registrousuario', component: RegistroUsuariosComponent , canActivate: [LoginGuard, AdminGuard] },
    { path: 'visualizarusuarios', component: VisualizaUsuariosComponent , canActivate: [LoginGuard, AdminGuard] },
    { path: 'editarusuario/:id', component: EditUsuariosComponent , canActivate: [LoginGuard, AdminGuard] },
    { path: 'profile', component: ProfileComponent , canActivate: [LoginGuard, AccessWebGuard]  },
    { path: 'editaprofile/:id', component: EditProfileComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'registroalimento/:id', component: RegistroAlimentosComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'registrosubcategoria/:id', component: RegistroSubcategoriasComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'visualiza/:id', component: VisualizaAlimentoComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: 'edita-alimento/:id', component: EditaAlimentoComponent , canActivate: [LoginGuard, AccessWebGuard] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
  ] }
];

export const SNAV_ROUTES = RouterModule.forChild(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes),],
  
// })
// export class AppRoutingModule { }
