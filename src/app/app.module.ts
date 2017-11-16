import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IndependentService } from './service/independent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ IndependentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
