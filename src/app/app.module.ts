import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule, // si, prop binding, ngClass, ngStyle, event binding, *ngIf, *ngFor
    FormsModule, // ngModel will work, and template driven form will also work
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
