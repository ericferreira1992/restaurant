import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
    selector: 'ctrl-messages',
    template: `<div class="helper danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class CtrlMessages {
    @Input() control: FormControl;
    
    constructor() { }

    public get errorMessage() {
        if(this.control)
        {
            for (let propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched)
                {
                    let msg = ValidationService.getErrorMsg(propertyName, this.control.errors[propertyName]);
                    return msg;
                }
            }
        }
        return null;
    }
}