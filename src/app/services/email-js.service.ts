import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  public async sendEmail(e: Event): Promise<void> {
    try {
      const response = await emailjs.sendForm(
        environment.EMAIL_JS_SERVICE_ID,
        environment.EMAIL_JS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        {
          publicKey: environment.EMAIL_JS_KEY,
        }
      );

      if (response.status === 200) {
        console.log(response);

        console.log('Email sending successful!');
      }
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        return console.log(`Failure sending email. Error: ${error.text}`);
      }

      console.log('Failure sending email. Error: ');
    }
  }
}
