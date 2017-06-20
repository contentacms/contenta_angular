import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdButtonModule, MdSidenavModule, MdIconModule, MdIconRegistry, MdListModule, MdProgressSpinnerModule } from '@angular/material';

import { MaterialIconsService } from './../services/material-icons/material-icons.service';

const SHARED_MODULES = [
  CommonModule,
  HttpModule,
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
  MdProgressSpinnerModule,
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MdIconRegistry,
        MaterialIconsService,
      ]
    }
  }
}
