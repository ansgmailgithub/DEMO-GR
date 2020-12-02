import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MapWidgetComponent } from './components/map-widget/map-widget.component';
import { SelectorComponent } from './components/selector/selector.component';
@NgModule({
  declarations: [
    AppComponent,
    MapWidgetComponent,
    SelectorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRBePcAKyIi9AT0dJZBPg-1nDf_wZOCO0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
