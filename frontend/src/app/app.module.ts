import { AppPage } from './../../e2e/src/app.po';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';




//Services
// import { LoginService } from './services/login.service';
// import { UsersService } from './services/users.service';
// import { CategoriaAPagesModulelimentoService } from './services/categoria-alimento.service';
// import { SubcategoriaAlimentoService } from './services/subcategoria-alimento.service';
// import { AlimentoService } from './services/alimento.service';

//Components
import { SnavModule } from './components/snav.module';
import { LoginComponent } from './components/login/login.component';
SNAV_ROUTES
// import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { ModalEditCategoriaComponent } from './components/modal-edit-categoria/modal-edit-categoria.component';
// import { ModalEditSubcategoriaComponent } from './components/modal-edit-subcategoria/modal-edit-subcategoria.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
// import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
// import { VisualizaAlimentoComponent } from './components/visualiza-alimento/visualiza-alimento.component';
// import { SidenavComponent } from './components/sidenav/sidenav.component';
// import { EditaAlimentoComponent } from './components/edita-alimento/edita-alimento.component';

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
import { SNAV_ROUTES } from './components/snav.routes';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    // DashboardComponent,
    // RegistroAlimentosComponent,
    // SidenavComponent,
    // RegistroSubcategoriasComponent,
    // VisualizaAlimentoComponent,
    // RegistroUsuariosComponent,
    // ProfileComponent,
    // ModalEditCategoriaComponent,
    // ModalEditSubcategoriaComponent,
    // EditaAlimentoComponent
  ],
  entryComponents: [
    // ModalEditCategoriaComponent, 
    // ModalEditSubcategoriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    SnavModule,
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
    // LoginService,
    // UsersService,
    // CategoriaAlimentoService,
    // SubcategoriaAlimentoService,
    // AlimentoService
  ],
  bootstrap: [AppComponent],
  exports: [
    // MaterialModule
  ]
})
export class AppModule { }
