import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientModule } from './modules/patient/patient.module';
import { DataService } from './modules/shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PatientController } from './core/controllers/patient.controller';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PatientModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    PatientController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
