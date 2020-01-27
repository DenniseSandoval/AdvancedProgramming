import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../providers/apiservice.service'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.page.html',
  styleUrls: ['./listcustomer.page.scss'],
})
export class ListcustomerPage implements OnInit {

  classrooms: any ;
  constructor(public api: ApiserviceService, public loadingController: LoadingController) {
    
    this.classrooms = [];
   }
  
  ngOnInit() {
    this.getAllCustomers();
  }
      getAllCustomers() {
        //Get saved list of students
        this.api.getClassroom().subscribe(response => {
          console.log(response);
          this.classrooms = response;
        })
      }

}
