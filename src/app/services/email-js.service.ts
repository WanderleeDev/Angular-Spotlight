import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.development';
import { showCustomToast } from '../shared/utils/showToast';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  public async sendEmail(form: HTMLFormElement): Promise<void> {
    try {
      const response = await emailjs.sendForm(
        environment.EMAIL_JS_SERVICE_ID,
        environment.EMAIL_JS_TEMPLATE_ID,
        form,
        { publicKey: environment.EMAIL_JS_KEY }
      );

      if (response.status === 200) {
        this.showToast($localize`Email sent successfully!`);
      }
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        this.showToast(
          `${$localize`Failure sending email. Error:`} ${error.text}`
        );

        return;
      }

      this.showToast($localize `System error sending email.`);
    }
  }

  private showToast(message: string): void {
    showCustomToast(message);
  }
}
