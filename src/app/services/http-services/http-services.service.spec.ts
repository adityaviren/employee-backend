import { TestBed } from '@angular/core/testing';

import {  HttpService} from '../http-services/http-services.service';

describe('HttpServicesService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
