import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex-components',
  template: `
    <p>
      This is component...
    </p>
  `,
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
