import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { HorizontalNavBarComponent } from './horizontal-nav-bar/horizontal-nav-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: "", component: NavBarComponent
  },
  {
    path: "actions", component: ActionsComponent
  },  
  {
    path: "horizontal-nav-bar", component: HorizontalNavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
