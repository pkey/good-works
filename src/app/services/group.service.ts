import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models';
import {Group} from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get<Group[]>(`https://swedbank-demo.herokuapp.com/api/groups`);
  }

}
