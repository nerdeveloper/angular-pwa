import { Injectable } from '@angular/core';
import { PlaceLocation  } from './logic/PlaceLocation';


@Injectable()
export class GeolocationService {

  constructor() { }
  requestLocation(callback) {
// W3C Geolocation API
navigator.geolocation.getCurrentPosition(
  position => {
    callback(position.coords);

  },
  error => {
callback(null);
  }
);

  }
  getMapLink(location: PlaceLocation ) {
    // Universal link
 let query = '';
    if (location.latitude) {
      query = `${location.latitude}` + ',' + location.longitude;
    } else {
      query =  `${location.address}, ${location.city}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?=${query}`;
    } else {
     return `https://google.com/maps/?=${query}`;
    }
  }
}
