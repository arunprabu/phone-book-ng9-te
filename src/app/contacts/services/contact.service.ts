import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {  // dep inj
  }

  // create a contact
  createContact(formData: any) { // 1. get the data from comp
    console.log('Inside createContact');
    console.log(formData);

    // 2. send the data to rest api using HttpClient -- Refer constructor for dependency inj
    // 2.1. identify the rest api url: http://jsonplaceholder.typicode.com/users
    // 2.2. hit the rest api with POST method

    return this.http.post(this.REST_API_URL, formData)
      .pipe(map((res: any) => {   // 3. get the resp from rest api
        console.log(res);
        return res;   // 4. send it back to the comp
      }));
  }

  // get list of contacts
  getContacts() {
    console.log('Inside getContacts of ContactService');

    // send a call to rest api with get method -- use HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any[]) => {  // get the resp from rest api
        console.log(res);
        return res;
      }));
  }

  // get contact details
  
  // update contact 

  // delete contact 

  // search contacts 

  // filter contacts 

  // get total contacts counts 


}
