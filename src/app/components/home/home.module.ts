import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from '../about/about.component';

const components = [
  HomeComponent,
  AboutComponent,
]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
