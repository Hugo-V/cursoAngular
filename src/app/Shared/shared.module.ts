import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { BoleanCoverter } from './Pipes/boleanConvert';
import { ProgresSpinerComponent } from './componet/progres-spiner/progres-spiner.component';
import { LabelWarningDirective, invalidoComponent } from './directives/label-warning.directive';
import { KeyFilterDirective } from './directives/key-filter.directive';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const Directives = [
  ProgresSpinerComponent,
  KeyFilterDirective,
  LabelWarningDirective
];
const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatTableModule
];
const Pipes = [
  BoleanCoverter
];
const EntryComponents = [
  invalidoComponent
];

@NgModule({
  declarations: [
    Directives,
    Pipes,
    EntryComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    Material
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    Material,
    Directives,
    Pipes,
  ],
  entryComponents: [EntryComponents]
})
export class SharedModule { }
