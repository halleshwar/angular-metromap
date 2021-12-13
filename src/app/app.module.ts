import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MetroMapComponent } from './metro-map/metro-map.components';
import { AmmModule } from './metro-map/angular-metro-maps.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AmmModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent],
  providers: [
    {provide: Document, useValue: document},
    {provide:HttpClient

    }
  ]
})
export class AppModule { }
