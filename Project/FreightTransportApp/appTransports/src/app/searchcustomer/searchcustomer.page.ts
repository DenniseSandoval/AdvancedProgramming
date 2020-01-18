import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.page.html',
  styleUrls: ['./searchcustomer.page.scss'],
})
export class SearchcustomerPage implements OnInit {

  studentsData: any;
 
  constructor(
    public apiService: ApiserviceService
  ) {
    this.studentsData = [];
  }
  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    })
  }


}
