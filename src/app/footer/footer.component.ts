import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // component with inline template
  template: `
    <div class='text-center'>
      <hr>
      <app-menu></app-menu>
      <p>Copyright 2020 - Arun</p>
    </div>
  `,
  // component with inline styles
  styles: [
    
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
