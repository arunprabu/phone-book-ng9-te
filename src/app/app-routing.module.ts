import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { AuthGuard } from './shared/guards/auth.guard';

// routing configs
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate:[ AuthGuard] },
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':id', component: ContactDetailsComponent }  // id is an url param
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
