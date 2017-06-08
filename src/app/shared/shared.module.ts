import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { TransferHttpModule } from './../../modules/transfer-http/transfer-http.module';

const SHARED_MODULES = [
    HttpModule,
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
