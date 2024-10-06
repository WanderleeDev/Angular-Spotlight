import { Component } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  inputValue = '';

  constructor(private readonly emailJsSvc: EmailJsService) {}

  public async sendMail(e: Event): Promise<void> {
    await this.emailJsSvc.sendEmail(e)
  }
}
