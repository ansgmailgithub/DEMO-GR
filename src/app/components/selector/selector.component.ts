import { Component, Output, OnInit, EventEmitter, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { MarkerLocation } from 'src/app/interfaces/location';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() locations: MarkerLocation[];
  @Output() updateMapCenter: EventEmitter<MarkerLocation> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  setMapCenter(mapCenter: MarkerLocation): void {
    this.updateMapCenter.emit(mapCenter);
  }
}
