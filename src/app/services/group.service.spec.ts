import { TestBed } from '@angular/core/testing';

import { GroupService } from './group.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [GroupService]}));

  it('should be created', () => {
    const service: GroupService = TestBed.get(GroupService);
    expect(service).toBeTruthy();
  });
});
