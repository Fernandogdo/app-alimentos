
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

//Services
// import { UsersService } from '../services/users.service';
// import { CategoriaAlimentoService } from '../services/categoria-alimento.service';
// import { SubcategoriaAlimentoService } from '../services/subcategoria-alimento.service';
// import { AlimentoService } from '../services/alimento.service';

//Components

import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalEditCategoriaComponent } from './modal-edit-categoria/modal-edit-categoria.component';
import { ModalEditSubcategoriaComponent } from './modal-edit-subcategoria/modal-edit-subcategoria.component';
import { ModalObjetosComponent } from './modal-objetos/modal-objetos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroAlimentosComponent } from './registro-alimentos/registro-alimentos.component';
import { RegistroSubcategoriasComponent } from './registro-subcategorias/registro-subcategorias.component';
import { VisualizaAlimentoComponent } from './visualiza-alimento/visualiza-alimento.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EditaAlimentoComponent } from './edita-alimento/edita-alimento.component';
import { VisualizaUsuariosComponent } from './visualiza-usuarios/visualiza-usuarios.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

//Material
// import { MaterialModule } from './material.module';

import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {LoginGuard} from '../guards/login.guard'
import {MatSelectModule} from '@angular/material/select';

import { SnavComponent } from './snav.component';
import { SNAV_ROUTES } from './snav.routes';
import { AdminGuard } from '../guards/admin.guard';
import { AccessWebGuard } from '../guards/access-web.guard';

@NgModule({
  declarations: [
    // AppComponent,
    SnavComponent,
    DashboardComponent,
    RegistroAlimentosComponent,
    SidenavComponent,
    RegistroSubcategoriasComponent,
    VisualizaAlimentoComponent,
    RegistroUsuariosComponent,
    ProfileComponent,
    ModalEditCategoriaComponent,
    ModalEditSubcategoriaComponent,
    EditaAlimentoComponent,
    VisualizaUsuariosComponent,
    EditUsuariosComponent,
    EditProfileComponent,
    ModalObjetosComponent
  ],
entryComponents: [ModalEditCategoriaComponent, ModalEditSubcategoriaComponent, ModalObjetosComponent],
  imports: [
    MatSelectModule,
    CommonModule,
    SNAV_ROUTES,
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    // MaterialModule,
    MatSliderModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    FormsModule,
  ],
  providers: [
    LoginGuard,
    AdminGuard,
    AccessWebGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    DashboardComponent,
  ]
})
export class SnavModule { }
