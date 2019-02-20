import { Component, OnInit } from '@angular/core';
import { Person } from '../models';
import { PersonService } from '../services/person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[];

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit() {
    this.persons = [{
      pid: 10001,
      name: 'Petras',
      middleName: 'Jonas',
      surname: 'Petrovičius',
      phone: '+37067878787',
      email: 'petrovic@p.lt'
    },
    {
      pid: 10002,
      name: 'Kazimieras',
      middleName: 'Jonas',
      surname: 'Petrovičius',
      groups: ['SOS', 'MOPT', 'Important stuff']
    },
    {
      pid: 10003,
      name: 'Giedrė',
      surname: 'Elenovicytė',
      email: 'elen@p.lt',
      groups: ['SOS', 'MOPT']
    },
    {
      pid: 10004,
      name: 'Elena',
      surname: 'Elenovicienė',
      phone: '+37067878787',
      groups: ['SOS']
    }
    ];
    this.personService.changePersonList(this.persons);
  }

  deletePerson(personToDelete: Person) {
    // this.persons = this.persons.filter(person => person.pid !== personToDelete.pid);
    // this.personService.changePersonList(this.persons);

    console.log(personToDelete);
    this.personService.removePerson(personToDelete.pid).subscribe(
      res => {
        this.persons = this.persons.filter(item => item.pid !== personToDelete.pid);
        this.personService.changePersonList(this.persons);
      },
      err => {
        // show error
      }
    );
  }

  editPerson(person: Person) {
    console.log('edit');
    this.router.navigate(['update-person', person.pid]);
  }

  getPersons() {
    this.personService.getPersons().subscribe(
      persons => {
        console.log(persons);
        this.personService.changePersonList(persons);
        this.persons = persons;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

}
