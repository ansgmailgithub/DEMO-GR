import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkerLocation } from './interfaces/location';
import { MarkerService } from './services/marker-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GeoRadix';
  locations: MarkerLocation[] = [];
  mapCenter: MarkerLocation;
  zoomLevel = 4;
  subs: Subscription[] = [];
  constructor(
    private markerService: MarkerService
  ) {
  }
  ngOnInit(): void {
    this.subs.push(
      this.markerService.get().subscribe((metaData) => {
        metaData.forEach(m => {
          this.locations.push(
            new MarkerLocation(m.lat, m.lon, m.city, m.state)
          );
        });
      })
    );
    this.mapCenter = new MarkerLocation(38.153781, -97.472113);
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  updateMapCenter(newMapCenter: MarkerLocation): void {
    this.mapCenter = newMapCenter;
    this.zoomLevel = 11;
  }
  resetView(): void {
    this.mapCenter = new MarkerLocation(38.153781, -97.472113);
    this.zoomLevel = 4;
  }
}
