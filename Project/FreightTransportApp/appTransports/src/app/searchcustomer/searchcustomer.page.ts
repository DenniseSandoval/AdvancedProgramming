import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service'; //importamos nuestro service

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.page.html',
  styleUrls: ['./searchcustomer.page.scss'],
})
export class SearchcustomerPage{
  constructor(public api: ApiserviceService, public loadingController: LoadingController) {
    
    this.ngOnInit();
   }
  classrooms: any =[];

  async  ngOnInit() {
    console.log("entro");
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    
    await loading.present();
    this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.classrooms = res;
        console.log(this.classrooms);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  
}