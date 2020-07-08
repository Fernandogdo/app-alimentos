import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';


//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroAlimentosComponent } from './components/registro-alimentos/registro-alimentos.component';
import { RegistroSubcategoriasComponent } from './components/registro-subcategorias/registro-subcategorias.component';
import { SnavModule } from './components/snav.module';
import { LoginComponent } from './components/login/login.component';
//Material
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';;
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { VisualizaAlimentoComponent } from './components/visualiza-alimento/visualiza-alimento.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VisualizaUsuariosComponent } from './components/visualiza-usuarios/visualiza-usuarios.component';
import { EditUsuariosComponent } from './components/edit-usuarios/edit-usuarios.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MatChipsModule } from '@angular/material/chips';


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
  entryComponents:[],
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
