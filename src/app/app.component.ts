import { Component } from '@angular/core';

@Component({  // decorator 
  selector: 'app-root', // element selector is recommended   -- mandatory
  templateUrl: './app.component.html', // html template  -- mandatory 
  styleUrls: ['./app.component.css'] // css --optional 
})
export class AppComponent {
  // ts 
  title = 'phone-book-ng9-te';


}
