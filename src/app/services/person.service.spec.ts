import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [PersonService]}));

  it('should be created', () => {
    const service: PersonService = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });
});
