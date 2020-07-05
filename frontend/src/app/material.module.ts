import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {
    MatNativeDateModule,
    MatDialog,
    MatMenuModule,
    MatSliderModule,
    MatListModule,
    MatSidenavModule,
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
} from '@angular/material';

@NgModule({
    imports: [
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
    ],
    declarations: [],
    providers: [
        MatDialog
    ]
})
export class MaterialModule { }