import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdIconRegistry,
  MdListModule,
  MdProgressSpinnerModule,
  MdCardModule
} from '@angular/material';

import { MaterialIconsService } from './../services/material-icons/material-icons.service';

import { CardComponent } from './../components/card/card.component';

const SHARED_MODULES = [
  CommonModule,
  HttpModule,
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdCardModule,
  RouterModule,
];

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    CardComponent,
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
