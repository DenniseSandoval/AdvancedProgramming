import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import {ApiserviceService} from '../../providers/apiservice.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  data: Customer
  constructor(
    public api: ApiserviceService, public loadingController: LoadingController
  ) {
    this.ngOnInit();
    this.data = new Customer();
  }

  ngOnInit() {
  }
  submitForm() {
    this.api.createItem(this.data).subscribe((response) => {
      //this.router.navigate(['list']);
      console.log(this.data);
      console.log("agregado ");
    });
 
  }
  /*submitForm() {
    this.api.createItem(this.data)
      .subscribe(res => {
        console.log(res);
        this.data = res;
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }*/
  
}
