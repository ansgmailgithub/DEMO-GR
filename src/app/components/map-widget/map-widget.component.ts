import { Component, Input, OnInit } from '@angular/core';
import { MarkerLocation } from 'src/app/interfaces/location';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {
  title = 'My first AGM project';
  @Input() locations: MarkerLocation[];
  @Input() mapCenter: MarkerLocation = new MarkerLocation(51.178418, 7.309007);
  @Input() zoomLevel = 8;
  constructor(
  ) {
  }
  ngOnInit(): void {
  }
}
