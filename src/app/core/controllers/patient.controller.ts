import { Injectable } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services/data.service';


@Injectable({
  providedIn: 'root'
})
export class PatientController {

  constructor(private dataServices: DataService) { }

  getAllPatients(url: string) {
    return this.dataServices.getALL(url);
  }
}

