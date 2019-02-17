import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../models";
import {GroupService} from "../services/group.service";
import {Group} from "../models/group";
import {CustomValidator} from "../utils/custom-validators";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person : Person;
  groups : Group[];

  personForm: FormGroup;
  // Template Driven:
  // person: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   pid: ''
  // };
  // name = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
              private personsService: PersonService,
              private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.getGroups();
      // this.data.currentPersonList.subscribe(persons => {
      //   if(!persons.some(person => person.pid === this.personId)) {
      //     console.log('sry');
      //     // this.router.navigate(['about']);
      //   }
      //   console.log(this.personId);
      //
      // });
      this.createForm();
  }

  createForm(person?: Person) {
    this.personForm = this.formBuilder.group({
      "name": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "surname": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "pid": ['', Validators.required],
      "email": ['', [Validators.required, CustomValidator.isValidEmailFormat]]
    })
  }
  // Template driven:
  // showPerson(){
  //   this.person.firstName = "asdasd";
  //   console.log("person", this.person);
  // }

  addUser() {
    console.log(this.personForm);
    console.log(this.personForm.controls);
    console.log(this.personForm.value.firstName);
    this.personsService.addPerson(this.personForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('finally')
      }
    );
  }

  getGroups() {
    this.groupService.getGroups().subscribe(
      groups => {
        console.log(groups);
        this.groups = groups;
      }
    )
  }

}
