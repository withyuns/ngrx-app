import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  Test my app
    <app-top></app-top><br/>
    <app-body></app-body>
  `
})
export class AppComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit() {
  }
}
