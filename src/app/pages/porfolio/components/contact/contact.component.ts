import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailJsService } from 'src/app/services/email-js.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  inputValue = '';

  constructor(private readonly emailJsSvc: EmailJsService) {}

  public async sendMail(e: Event, form: NgForm): Promise<void> {
    if (form.invalid || !this.inputValue.trim()) return;

    const formElement = e.target instanceof HTMLFormElement;

    if (!formElement) return;

    try {
      await this.emailJsSvc.sendEmail(e.target);
    } catch (error) {
      console.log(`Error sending email: ${error}`);
    }

    form.resetForm();
  }
}
