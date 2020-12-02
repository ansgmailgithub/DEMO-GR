export class MarkerLocation {
  lat: number;
  lon: number;
  city: string;
  state: string;
  constructor(lat?: number, lon?: number, city?: string, state?: string) {
    this.lat = lat ? lat : 51.678418;
    this.lon = lon ? lon : 7.809007;
    this.city = city ? city : 'null';
    this.state = state ? state : 'null';
  }
}
