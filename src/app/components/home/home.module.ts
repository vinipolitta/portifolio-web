import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { PortifolioComponent } from '../portifolio/portifolio.component';

const components = [
  HomeComponent,
  AboutComponent,
  ServicesComponent,
  PortifolioComponent,

]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
