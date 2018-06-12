import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const materialModules: any[] = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatDialogModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule {

}
