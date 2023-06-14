import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [PatientDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PatientDetailsComponent
  ]
})
export class PatientModule { }
