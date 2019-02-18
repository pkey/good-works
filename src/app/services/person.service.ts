import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Person} from "../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personList = new BehaviorSubject<Person[]>([]);
  currentPersonList = this.personList.asObservable();

  changePersonList(list: Person[]) {
    this.personList.next(list);
  }

  constructor(private http: HttpClient) {
  }

  getPersons() {
    return this.http.get<Person[]>(`https://swedbank-demo.herokuapp.com/api/persons`)
  }

  getPerson(id) {
    return this.http.get<Person>(`https://swedbank-demo.herokuapp.com/api/persons/${id}`)
  }

  addPerson(person: Person) {
    return this.http.post(`https://swedbank-demo.herokuapp.com/api/persons`,
      person)
  }

  setGroup(pid, id) {
    console.log('setting');
    return this.http.patch(`https://swedbank-demo.herokuapp.com/api/persons/${pid}/groups/${id}`, {})
  }

  updatePerson(person: Person) {
    return this.http.put(`https://swedbank-demo.herokuapp.com/api/persons`,
      person)
  }

  removePerson(id) {
    return this.http.delete(`https://swedbank-demo.herokuapp.com/api/persons/${id}`)
  }

}
