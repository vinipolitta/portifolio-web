import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input() text: string = '';
  constructor() {
    console.log(this.text);
  }



}
