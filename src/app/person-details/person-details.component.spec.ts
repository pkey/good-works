import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsComponent } from './person-details.component';
import {PersonService} from '../services/person.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    component.person = {
      pid: 10002,
      name: 'Kazimieras',
      middleName: 'Jonas',
      surname: 'Petrovičius',
      groups: ['SOS', 'MOPT', 'Important stuff']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
