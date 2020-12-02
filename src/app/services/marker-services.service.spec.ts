import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MarkerService } from './marker-services.service';

describe('MarkerServicesService', () => {
  let service: MarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [
          HttpClientModule
        ],
        providers: [
          {provide: HttpClient}
        ]
      }
    );
    service = TestBed.inject(MarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
