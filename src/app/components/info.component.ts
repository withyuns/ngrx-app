import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `<div class="ui-g-12">
    <div class="ui-g-2"></div>
    <div class="ui-g-8">
        <p-panel header="Direction">
            Note, Please click menus above!
        </p-panel>
    </div>
    <div class="ui-g-2"></div>
  </div>`
})
export class InfoComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
