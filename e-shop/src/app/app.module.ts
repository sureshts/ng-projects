import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { PencePipe } from './pence.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    HeaderComponent,
    ProductListPageComponent,
    PencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
