import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

registerLocaleData(localePt, 'pt', localePtExtra);

import { AppComponent } from './app.component';
import { RegistroFrequenciaComponent } from './registro-frequencia/registro-frequencia.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroFrequenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
