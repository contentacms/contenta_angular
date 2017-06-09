import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransferHttpModule } from './../../modules/transfer-http/transfer-http.module';

const SHARED_MODULES = [
    CommonModule,
    TransferHttpModule
];

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    exports: [
        ...SHARED_MODULES
    ],
})
export class SharedModule { }
