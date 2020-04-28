import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

registerLocaleData(localePt, 'pt', localePtExtra);

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt',
    },
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
