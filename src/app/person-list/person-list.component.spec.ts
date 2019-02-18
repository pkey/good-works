import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponent } from './person-list.component';
import {PersonDetailsComponent} from "../person-details/person-details.component";
import {GroupListComponent} from "../group-list/group-list.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListComponent, PersonDetailsComponent, GroupListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
