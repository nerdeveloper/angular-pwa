import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from './geolocation.service';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSlideToggleModule, MatIconModule, MatInputModule,
        MatSelectModule, MatSliderModule, MatToolbarModule, MatSnackBarModule} from '@angular/material';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'coffee', component: CoffeeComponent},
  {path: 'coffee/:id', component: CoffeeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent,
  ],
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule, HttpClientModule, MatSnackBarModule,
    RouterModule.forRoot(routes),
    BrowserModule, MatButtonModule, MatCardModule, MatSlideToggleModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule, BrowserAnimationsModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
