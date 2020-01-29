import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../providers/apiservice.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-searclientdetail',
  templateUrl: './searclientdetail.page.html',
  styleUrls: ['./searclientdetail.page.scss'],
})
export class SearclientdetailPage implements OnInit {
  id: number;
  cr: any;
  constructor(public api: ApiserviceService, public activatedRoute: ActivatedRoute,public loadingController: LoadingController) {
   this.ngOnInit();
  }
  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.api.getItem(this.id).subscribe(response => {
      console.log(this.id);
      console.log(response);
      this.cr = response;
    })
  }
}
