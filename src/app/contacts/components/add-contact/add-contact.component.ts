import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  isSaved = false;
  // Step 1: Create a html form tag equivalent in ts
  contactForm: FormGroup;

  constructor(private contactService: ContactService) {  // dependency injection

  }

  ngOnInit(): void {  // life cycle hook
    // Step 1:
    this.contactForm = new FormGroup({
      // Step 2: specify input equivalents here -- FormControl
      name: new FormControl('arun', Validators.required),  // step 5: work on validations
      phone: new FormControl('234234', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });  // todo: work with min length or max length for the fields

    // refer html for step 3

  }

  addContactHandler() {
    console.log(this.contactForm.value);
    // 1. send the data to service
    this.contactService.createContact(this.contactForm.value)
      .subscribe((res: any) => { // 2. get the resp from service
        console.log(res);
        if (res && res.id){
          this.isSaved = true;
        }
      });
  }

}
