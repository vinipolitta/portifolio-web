import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'readmore', component: ReadMoreComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
