import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../models';
import {GroupService} from '../services/group.service';
import {Group} from '../models/group';
import {CustomValidator} from '../utils/custom-validators';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  isEditForm: boolean;
  person: Person;
  personId: number;
  isReady = false;

  groups: Group[];
  selectedGroup: Group;
  addedGroups: Group[] = [];

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private personsService: PersonService,
              private route: ActivatedRoute,
              private router: Router,
              private groupService: GroupService) {
    this.route.params.subscribe(params => {
      this.personId = +params.id;
      console.log(+params.id, !!+params.id, params.id);
      this.isEditForm = !!+params.id || params.id;
    } );
  }

  ngOnInit(): void {
    this.getGroups();
    if (this.isEditForm) {
      this.personsService.getPerson(this.personId).subscribe(
        person => {
          this.createForm(person);
        },
        err => {
          this.router.navigate(['participants']);
        },
        () => {
          this.isReady = true;
        }

      );
    } else {
      this.createForm();
      this.isReady = true;
    }
  }

  createForm(person?: Person) {
    this.personForm = this.formBuilder.group({
      name: [person ? person.name : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      surname: [person ? person.surname : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      pid: [person ? person.pid : '', Validators.required],
      email: [person ? person.email : '', [Validators.required, CustomValidator.isValidEmailFormat]],
    });
  }

  addUser() {
    console.log(this.personForm);
    console.log(this.personForm.controls);
    console.log(this.personForm.controls);
    this.personsService.addPerson(this.personForm.value).subscribe(
      res => {
        console.log(res, this.addedGroups);
        this.addedGroups.forEach(group => {
          console.log('hi');
          this.personsService.setGroup(this.personForm.value.pid, group.id);
        });
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('finally');
      }
    );
  }

  addGroup() {
    const control = this.personForm.controls.groups as FormArray;
    if (!this.addedGroups.includes(this.selectedGroup)) {
      this.addedGroups.push(this.selectedGroup);
    }
  }

  initGroup(group) {
    return this.formBuilder.group(group);
  }

  removeGroup(id) {
    this.addedGroups.splice(id, 1);
  }

  setSelectedGroup(group: Group) {
    this.selectedGroup = group;
  }

  getGroups() {
    this.groupService.getGroups().subscribe(
      groups => {
        console.log(groups);
        this.groups = groups;
      }
    );
  }

  updatePerson() {
    console.log('updating');
    this.personsService.updatePerson(this.personForm.value).subscribe(
      res => {
        console.log('gg');
      },
      err => {
        console.log('sry');
      }
    );
  }

}
