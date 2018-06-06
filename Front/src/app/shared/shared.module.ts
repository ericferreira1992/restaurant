import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spinner } from './components/spinner/spinner.component';
import { AuthGuard } from './guards/auth.guard';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { RestaurantePipe } from './pipes/restaurante.pipe';
import { CtrlMessages } from './components/ctrl-messages.component';
import { Confirm, ConfirmComponent } from './services/confirm/confirm.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Spinner,
        CtrlMessages,
        FilterPipe,
        OrderByPipe,
        RestaurantePipe,
        ConfirmComponent
    ],
    providers: [
        FilterPipe,
        OrderByPipe,
        RestaurantePipe
    ],
    exports:[
        Spinner,
        CtrlMessages,
        FilterPipe,
        OrderByPipe,
        RestaurantePipe,
        ConfirmComponent
    ],
    entryComponents: [
        ConfirmComponent
    ]
})
export class SharedModule { }
