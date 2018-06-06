import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html'
})
export class Spinner {
    @Input('css') public css: any;

    @Input('white') public white: Boolean;

    @Input('padding') public padding: String;

    constructor(){
        if(this.padding != '' && this.padding != null)
            this.css['padding'] = this.padding;

    }

    ngOnInit(){
    }

    @HostListener('click')
    onClick()
    {

    }
}
