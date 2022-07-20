import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ContactUsShellComponent } from './contact-us-shell/contact-us-shell.component';
import { ContactUsReactiveComponent } from './contact-us-reactive/contact-us-reactive.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FaqComponent,
    ContactUsComponent,
    ContactUsShellComponent,
    ContactUsReactiveComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
