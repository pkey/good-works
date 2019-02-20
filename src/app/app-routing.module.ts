import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PersonFormComponent} from './person-form/person-form.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'participants', component: PersonListComponent},
  {path: 'update-person/:id', component: PersonFormComponent},
  {path: 'create-person', component: PersonFormComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
