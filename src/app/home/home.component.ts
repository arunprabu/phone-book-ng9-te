import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .redWrapper{
        color: white;
        background: red;
      }

      .greenWrapper{
        color: white;
        background: green;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  // variables
  // string interpolation related
  appName = 'Phone Book App!';
  exp = 14;
  isLoggedIn = true;

  // property binding related
  city = 'Chennai';

  // two way binding related
  course = 'Angular';

  // for *ngFor
  skillsList: string[] = [ 'html', 'css', 'js '];


  constructor() { }

  ngOnInit(): void {
  }

  // public methods can be added

  // event binding related
  clickMeBtnHandler(): void {
    alert('clicked');
  }

  isAuth(): boolean {
    return this.isLoggedIn;
  }

}
