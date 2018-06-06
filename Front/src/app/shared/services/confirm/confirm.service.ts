import { Component, OnInit, Injectable, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

@Injectable()
export class Confirm {
    private vcr: ViewContainerRef;

    private confirmComponent: ConfirmComponent;
    private componentRef: ComponentRef<ConfirmComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    public setRootVcr(vcr: ViewContainerRef){
        this.vcr = vcr;
    }

    private createComponent(){
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmComponent);
        this.componentRef = this.vcr.createComponent(componentFactory);
        this.confirmComponent = <ConfirmComponent>this.componentRef.instance;
        this.confirmComponent.componentRef = this.componentRef;
    }

    public show(obj: any, okCallback, cancelCallback = null){
        this.createComponent();

        if(typeof obj == 'string')
            this.confirmComponent.objeto = {
                msg: obj
            };
        else
            this.confirmComponent.objeto = obj;

        this.confirmComponent.okCallback = okCallback;
        this.confirmComponent.cancelCallback = cancelCallback;
    }
}

@Component({
    template: `
        <div class="ng-confirm-geral" [ngClass]="{'ng-confirm-in': modalShow, 'ng-confirm-out': !modalShow}" id="ng-confirm-1">
            <div class="ng-confirm-area">
                <div class="ng-confirm-container ng-confirm-in">
                    <header class="primary" [innerHtml]="titulo"></header>
                    <section [innerHtml]="msgConfirmacao"></section>
                    <div>
                        <button class="btn btn-primary txt-center" (click)="okBtn()" id="ng-confirm-ok" [innerHtml]="okBtnLabel" autofocus></button>
                        <button class="btn btn-none txt-center" (click)="cancelarBtn()"id="ng-confirm-cancel" [innerHtml]="cancelarBtnLabel"></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./confirm.service.scss']
})
export class ConfirmComponent implements OnInit {
    public componentRef: ComponentRef<ConfirmComponent>;

    public objeto: any;
    public okCallback: (() => any);
    public cancelCallback: (() => any);

    public titulo: String;
    public msgConfirmacao: String;
    public okBtnLabel: String;
    public cancelarBtnLabel: String;

    public modalShow: boolean = false;

    constructor(){ }

    ngOnInit(){
        this.titulo = this.objeto.title != undefined ? this.objeto.title : 'Confirmação';
        this.msgConfirmacao = this.objeto.msg != undefined ? this.objeto.msg : 'Tem certeza que deseja prosseguir?';
        this.okBtnLabel = this.objeto.okBtn != undefined ? this.objeto.okBtn : 'Sim';
        this.cancelarBtnLabel = this.objeto.cancelBtn != undefined ? this.objeto.cancelBtn : 'Não';
        this.modalShow = true;
    }

    okBtn(){
        if(this.okCallback) this.okCallback();
        this.modalShow = false;

        setTimeout(() => this.componentRef.destroy(), 200);
    }

    cancelarBtn(){
        if(this.cancelCallback) this.cancelCallback();
        this.modalShow = false;

        setTimeout(() => this.componentRef.destroy(), 200);
    }
};
