import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  HomeComponent
]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
