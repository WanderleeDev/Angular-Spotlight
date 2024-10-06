import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.development';
import { toast } from 'ngx-sonner';
import { ToastComponent } from '../shared/components/toast/toast.component';

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
        this.showCustomToast('Email sent successfully!');
      }
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        this.showCustomToast(`Failure sending email. Error: ${error.text}`);

        return;
      }

      this.showCustomToast('System error sending email.');
    }
  }

  private showCustomToast(message: string): void {
    toast.custom(ToastComponent, {
      componentProps: { message: message },
    });
  }
}
