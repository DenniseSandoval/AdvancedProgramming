import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service'; //importamos nuestro service

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.page.html',
  styleUrls: ['./searchcustomer.page.scss'],
})
export class SearchcustomerPage implements OnInit{
  constructor(public api: ApiserviceService, public loadingController: LoadingController) { }
  classrooms: any = {};

  async getClassrooms() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.classrooms = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getClassrooms();
  }
}