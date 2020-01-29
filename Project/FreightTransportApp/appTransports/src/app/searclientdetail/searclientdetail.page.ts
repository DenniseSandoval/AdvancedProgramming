import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../providers/apiservice.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-searclientdetail',
  templateUrl: './searclientdetail.page.html',
  styleUrls: ['./searclientdetail.page.scss'],
})
export class SearclientdetailPage implements OnInit {
  id: number;
  constructor(public api: ApiserviceService, public activatedRoute: ActivatedRoute,public loadingController: LoadingController) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.ngOnInit();
   }
  classrooms: any ={};

ngOnInit() {
    this.searchbyid();
}
searchbyid(){
  
  console.log("entro a detail");  console.log(this.id);
      this.classrooms= this.api.getItem(this.id).subscribe(response => {
        console.log(this.classrooms)
        console.log("encontro")
      })
}
}
