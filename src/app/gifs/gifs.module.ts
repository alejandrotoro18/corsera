import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './gifspage/gifspage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[GifspageComponent],
  declarations: [GifspageComponent]
 
})
export class GifsModule { }