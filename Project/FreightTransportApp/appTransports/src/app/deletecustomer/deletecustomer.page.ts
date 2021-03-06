import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.page.html',
  styleUrls: ['./deletecustomer.page.scss'],
})
export class DeletecustomerPage implements OnInit {
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
  delete(item) {
    //Delete item in Student data
    this.api.deleteItem(item.ciClient).subscribe(Response => {
      //Update list after delete is successful
      this.getAllCustomers();
    });
  }
  
}
