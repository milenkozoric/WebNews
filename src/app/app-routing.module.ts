import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path: "", component: TopheadingComponent}, //home
  {path:"tehnology", component: TechnewsComponent}, //tehnology 
  {path:"business", component: BusinessnewsComponent}, //business 
  {path:"sport", component: SportnewsComponent}, //sport 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
