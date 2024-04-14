import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainAnimationComponent } from './main-animation/main-animation.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';

const components = [
  HeaderComponent,
  ButtonPrimaryComponent,
  MainSectionComponent,
  MainAnimationComponent,
  FooterComponent,
  SectionComponent
]

@NgModule({
  declarations: [...components,],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
