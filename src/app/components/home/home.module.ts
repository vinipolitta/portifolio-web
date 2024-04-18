import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { PortifolioComponent } from '../portifolio/portifolio.component';
import { RouterModule } from '@angular/router';
import { ReadMoreComponent } from './read-more/read-more.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';

const components = [
  HomeComponent,
  AboutComponent,
  ServicesComponent,
  PortifolioComponent,
  ContactComponent,
  ReadMoreComponent

]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
