import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerComponent } from './component/power/power.component';
import { MapComponent } from './component/applications/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CameraComponent } from './component/applications/camera/camera.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    MapComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
