import { Component, OnInit } from '@angular/core';
import { PatientController } from 'src/app/core/controllers/patient.controller';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient = {};
  constructor(private patientController: PatientController) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.patientController.getAllPatients('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.patient = result[0];
    }, error => {
      console.log('error');
    });
  }

}
