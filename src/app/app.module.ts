import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HorizontalNavBarComponent } from './horizontal-nav-bar/horizontal-nav-bar.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HorizontalNavBarComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
