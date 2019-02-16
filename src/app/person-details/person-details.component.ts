import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../models';


@Component({
  selector: 'app-person-details, [app-person-details]',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Person;
  @Output() deletePerson = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  onPersonDelete() {
    this.deletePerson.emit(this.person);
  }

}
