import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import {ApiserviceService} from '../../providers/apiservice.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchcustomerid',
  templateUrl: './searchcustomerid.page.html',
  styleUrls: ['./searchcustomerid.page.scss'],
})
export class SearchcustomeridPage implements OnInit {
  results: Observable<Customer>;
  ciClient: string = '';
  constructor(public api: ApiserviceService, public loadingController: LoadingController,public router: Router,) {
    this.ngOnInit();
   }
  ngOnInit() {
  }
}
