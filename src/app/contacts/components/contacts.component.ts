import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: any[];

  constructor( private contactService: ContactService) {
    console.log('Inside Constructor - ContactsComponent');
  }

  ngOnInit(): void {  // lifecycle hook

    console.log('Inside ngOnInit - ContactsComponent');

    // ideal place for you send ajax calls
    this.contactService.getContacts()
      .subscribe((res: any[]) => {
        console.log(res);
        this.contactList = res;
      });
  }

  // todo:
  ngOnDestroy(){
    console.log('Inside ngOnDestroy of ContactsComponent');
    // clear the data
    // unsubscribe
    // clear the interval
  }


}
