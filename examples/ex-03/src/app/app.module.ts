import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormatGenderPipe } from './format-gender.pipe';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, FilterPipe, FormatGenderPipe, UserListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
