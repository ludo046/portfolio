import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapApiKey = environment.mapApiKey;
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions;
  markers = [];
  public support : string = "assets/img/iphone_vide.png";
  public screenSize : number;
  public hours : Date = new Date;

  constructor(httpClient : HttpClient) {
    this.apiLoaded  = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + this.mapApiKey, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.markers.push({
        position:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        label:{
          color: 'red',
          text : 'Vous'
        },
        title : 'Vous'
      })
    })

    this.options = {
      center : {
        lat: 44.856708536531585,
        lng: 3.338707519321894
      },
      zoom: 8
    }
    this.addMarker()
    
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: 44.856708536531585,
        lng: 3.338707519321894
      },
      label: {
        color: 'red',
        text: 'Ludovic Moissinac',
      },
      title: 'Ludovic Moissinac',
      //options: { animation: google.maps.Animation.BOUNCE },
    })
  }

  onResize(event) {
    this.screenSize = event.target.innerWidth;
    if(window.innerWidth <= 390 || this.screenSize <= 390){
      this.support = "assets/img/iphone.png"
    } else if(window.innerWidth <= 820 || this.screenSize <= 820){
      this.support = "assets/img/ipad.png"
    } else if(window.innerWidth >= 821 || this.screenSize >= 821){
      this.support = "assets/img/mac.png"
    }
  }
}
