import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components';
import { HiperlinkComponent } from './components/hiperlink/hiperlink.component';




@NgModule({
  declarations: [
    NavBarComponent,
    HiperlinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
