import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {PieComponent} from './pie/pie.component';
import {BarComponent} from './bar/bar.component';
import {ScatterComponent} from './scatter/scatter.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent,PieComponent,BarComponent,ScatterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
