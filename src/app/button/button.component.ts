import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor() {}

  @Input() text!: string;
  @Output() clickEvent = new EventEmitter();

  public emitClick() {
    this.clickEvent.emit();
  }
}
