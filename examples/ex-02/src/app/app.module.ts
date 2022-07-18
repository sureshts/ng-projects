import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
