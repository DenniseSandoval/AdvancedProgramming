import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service'; 
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.page.html',
  styleUrls: ['./updatecustomer.page.scss'],
})
export class UpdatecustomerPage implements OnInit {
  id: number;
  classrooms: any ;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiserviceService
  ) {
    this.classrooms = new Customer();
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log("itemid");
      console.log(this.apiService.getItem(this.id));
      console.log(this.id);
      console.log(this.classrooms);
      console.log(response);
      this.classrooms = response;
    })
  }
 
  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.classrooms).subscribe(response => {
      //this.router.navigate(['list']);
      console.log("actualizado")
    })
  }
}
