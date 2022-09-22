import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFloatingButtonComponent } from './home-floating-button/home-floating-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeFloatingButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeFloatingButtonComponent],
})
export class SharedComponentsModule {}
