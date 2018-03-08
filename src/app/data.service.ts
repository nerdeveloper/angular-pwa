import { Injectable } from '@angular/core';
import { PlaceLocation} from './logic/PlaceLocation';
import {Coffee} from './logic/coffee';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  public endpoint = 'https://pwadb.azurewebsites.net/';
  get(coffeeId: string, callback) {
    this.http.get(`${this.endpoint}coffees/${coffeeId}`).subscribe(response => {
      callback(response);
    });
  }
getList(callback) {
  // Change to a real web service
// const list = [
//   new Coffee('Double Beer', "Sunny Cafe", new PlaceLocation("123 market", "San Fransciso" )),
//   new Coffee('DSmirn off', "hahaha", new PlaceLocation("Gran", "Madrid" )),

// ]
this.http.get(`${this.endpoint}coffees`).subscribe(response => {
  console.log(response);
  callback(response);
});

}
save (coffee, callback) {
  // Change to a real web service
  if (coffee._id) {
    // It's an update
    this.http.put(`${this.endpoint}coffees/${coffee._id}`, coffee).subscribe(respose => {
      callback(true);
    });
  } else {
    // It's an insert
    this.http.post(`${this.endpoint}coffees`, coffee).subscribe(response => {
      callback(true);
    });
  }

}
}

