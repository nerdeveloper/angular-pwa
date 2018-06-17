import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/coffee';
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: [Coffee];

  constructor(private snackBar: MatSnackBar, private data: DataService, private router: Router, private geolocation: GeolocationService) { }
  getDetails(coffee: Coffee) {
    this.router.navigate(['/coffee', coffee._id]);
  }
  getMap(coffee) {
  const mapurl = this.geolocation.getMapLink(coffee.location);
  location.href  = mapurl;
}
onDelete(coffee: Coffee) {
  this.data.delete(coffee, result => {
     this.snackBar.open('Message Deleted');
     const INDEX = this.list.indexOf(coffee);
     this.list.splice(INDEX, 1);
  });
}
share(coffee: Coffee) {
  const shareText = `I had this coffee at ${coffee.name} and for me it's a ${coffee.rating} for me`;
  if ('share' in navigator) {
    (navigator as any).share({
      title: coffee.name,
      text: shareText,
      url: window.location.href

}).then( () => console.log('shared')).catch( () => console.log('error sharing') );

  } else {
    const shareurl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
    location.href  = shareurl;
  }
}
  ngOnInit() {
    this.data.getList(list => {
        this.list  = list;
    });
  }

}
