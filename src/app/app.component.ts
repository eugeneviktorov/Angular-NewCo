import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from './utils/message-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formGroup = new FormGroup({
    text: new FormControl(null, Validators.required),
    // author: new FormControl(null, Validators.required),
  });

  messages: Message[];

  constructor() {
    this.messages = [
      { Author: 'Name', Text: 'Text One', Date: new Date(Date.now()) },
      { Author: 'Name', Text: 'Text Two', Date: new Date(Date.now()) },
    ];
  }

  send() {
    this.messages.push({
      // Author: this.formGroup.controls.author.value,
      Text: this.formGroup.controls.text.value,
      Date: new Date(Date.now()),
    });
    this.formGroup.reset();
  }
}
