import {ToastOptions} from 'ng2-toastr';

export class NgToastConfig extends ToastOptions {
    animate = 'flyRight';
    newestOnTop = false;
    showCloseButton = false;
    enableHTML = true;
}