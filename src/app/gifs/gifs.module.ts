import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './gifspage/gifspage.component';

@NgModule({
  exports: [
    GifspageComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [GifspageComponent]
 
})
export class GifsModule { }