import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MessageComponent } from './components/message/message.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyComponentComponent,
    MessageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
