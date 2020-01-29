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
  classrooms: Customer ;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiserviceService
  ) {
    this.classrooms = new Customer();
    this.id = this.activatedRoute.snapshot.params["id"];
    this.classrooms.ciClient=this.activatedRoute.snapshot.params["id"];
    
    this.ngOnInit();
  }
  ngOnInit() {
  }
 
  update() {
    this.apiService.updateItem(this.id, this.classrooms).subscribe(response => {
      this.router.navigate(['searchcustomer']);
    })
  }
}
