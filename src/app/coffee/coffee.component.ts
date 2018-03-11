import { Component, OnInit } from '@angular/core';
import { Coffee } from '../logic/coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/tastingRating';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  routeringPages: any;
  tastingEnabled = false;
  coffee: Coffee;
  types = ['Brustino', 'Nigerianno', 'Americano', 'Mexicanno', 'Icelanno'];
  constructor(private geolocation: GeolocationService,
    private router: Router, private data: DataService, private activated: ActivatedRoute) { }


  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }
  cancel() {
    this.router.navigate(['/']);

  }
  save() {
    this.data.save(this.coffee, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.coffee = new Coffee();
    this.routeringPages = this.activated.params.subscribe(params => {
      console.log(params['id']);
      if (params['id']) {
        this.data.get(params['id'], response => {
          this.coffee = response;
          if (this.coffee.tastingRating) {
            this.tastingEnabled = true;
          }
        });
      }
    });


    this.geolocation.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });
  }

}
