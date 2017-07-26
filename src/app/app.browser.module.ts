import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
