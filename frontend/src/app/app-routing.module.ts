import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'registroalimento', component: RegistroAlimentosComponent},
  {path: 'registrosubcategoria', component: RegistroSubcategoriasComponent},
  {path: 'registrousuario', component: RegistroUsuariosComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
