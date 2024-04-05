import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainAnimationComponent } from './main-animation/main-animation.component';

const components = [
  HeaderComponent,
  ButtonPrimaryComponent,
  MainSectionComponent,
  MainAnimationComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
