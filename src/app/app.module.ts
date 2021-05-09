import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HorizontalNavBarComponent } from './horizontal-nav-bar/horizontal-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HorizontalNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
