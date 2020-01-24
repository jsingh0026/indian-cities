import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocateCityComponent } from './locate-city/locate-city.component';
import { GetCitiesServiceService } from './get-cities-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LocateCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMjKgwe_lEWg_T2kSWtqHYE4jaCnhylmw'
    })
  ],
  providers: [GetCitiesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
