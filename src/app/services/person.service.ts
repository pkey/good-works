import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Person} from '../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
  }

  getPersons() {
    return this.http.get<Person[]>(`https://swedbank-demo.herokuapp.com/api/persons`);
  }

  getPerson(id) {
    return this.http.get<Person>(`https://swedbank-demo.herokuapp.com/api/persons/${id}`);
  }

  addPerson(person: Person) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(`https://swedbank-demo.herokuapp.com/api/persons`,
      person, {headers});
  }

  setGroup(pid, id) {
    console.log('setting');
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.patch(`https://swedbank-demo.herokuapp.com/api/persons/${pid}/groups/${id}`, {}, {headers});
  }

  updatePerson(person: Person) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(`https://swedbank-demo.herokuapp.com/api/persons`,
      person, {headers});
  }

  removePerson(id) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(`https://swedbank-demo.herokuapp.com/api/persons/${id}`, {headers});
  }

}
