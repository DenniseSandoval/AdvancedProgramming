import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiserviceService} from '../../providers/apiservice.service'; //importamos nuestro service

@Component({
  selector: 'app-searchguide',
  templateUrl: './searchguide.page.html',
  styleUrls: ['./searchguide.page.scss'],
})
export class SearchguidePage implements OnInit {

  constructor(public api: ApiserviceService, public loadingController: LoadingController) {
    
    this.ngOnInit();
   }
  guides: any =[];

  async  ngOnInit() {
    console.log("entro");
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    
    await loading.present();
    this.api.getGuides()
      .subscribe(res => {
        console.log(res);
        this.guides = res;
        console.log(this.guides);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
