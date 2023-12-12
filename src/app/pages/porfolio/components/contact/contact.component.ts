import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  inputValue = '';

  public sendMail() {
    console.log(this.inputValue);
  }
}
