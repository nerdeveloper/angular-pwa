import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate  } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor( private snackBar: MatSnackBar, private swUpdate: SwUpdate) { }

  getUpdatedUI() {
    if (navigator.onLine) {
      (document.querySelector('body') as any).style = '';
    } else {
      (document.querySelector('body')as any).style = 'filter: grayscale(1)';
    }
  }

  ngOnInit() {
    // Check for SW update status
  if (this.swUpdate.isEnabled) {
    this.swUpdate.activated.subscribe( () => {
    const sw =  this.snackBar.open('New version Available', 'Install Now', {duration: 4000});
sw.onAction().subscribe( () => {
 window.location.reload();
});
    });
  }
    // Checking Network Status
    this.getUpdatedUI();
  window.addEventListener('online', this.getUpdatedUI);
  window.addEventListener('pffline', this.getUpdatedUI);
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    if ((navigator as any).standalone === false) {
      // This is an iOS device and we are in the Browser.
      this.snackBar.open('You can add this PWA to the Home sceen', '',
        { duration: 3000 });
    }
    if ((navigator as any).standalone === undefined) {
      // this not iOS
      if (window.matchMedia('(display-mode: browser').matches) {
        // we are in the broswer
        window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          const sb = this.snackBar.open('Do you want to install this App?', 'Install',
            { duration: 5000 });
          sb.onAction().subscribe(() => {
            (event as any).prompt();
            (event as any).userChoice.then(result => {
              if (result.outcome === 'dismissed') {
                // TODO: Track no installations
              } else {
                // TODO: It was installed
              }
            });
          });
        });
      }
    }
  }
}
