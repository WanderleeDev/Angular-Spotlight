import { toast } from "ngx-sonner";
import { ToastComponent } from "../components/toast/toast.component";

export function showCustomToast(message: string): void {
  toast.custom(ToastComponent, {
    componentProps: { message: message },
  });
}
