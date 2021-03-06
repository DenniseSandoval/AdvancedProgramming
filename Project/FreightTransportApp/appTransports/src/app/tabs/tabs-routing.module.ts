import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'searchcustomer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../searchcustomer/searchcustomer.module').then(m => m.SearchcustomerPageModule)
          }
        ]
      },
      {
        path: 'searchcustomerid',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../searchcustomerid/searchcustomerid.module').then(m => m.SearchcustomeridPageModule)
          }
        ]
      },
      {
        path: 'searclientdetail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../searclientdetail/searclientdetail.module').then(m => m.SearclientdetailPageModule)
          }
        ]
      },
      {
        path: 'deletecustomer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deletecustomer/deletecustomer.module').then(m => m.DeletecustomerPageModule)
          }
        ]
      },{
        path: 'updatecustomer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../updatecustomer/updatecustomer.module').then(m => m.UpdatecustomerPageModule)
          }
        ]
      },
      {
        path: 'listcustomer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../listcustomer/listcustomer.module').then(m => m.ListcustomerPageModule)
          }
        ]
      },
      {
        path: 'customer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../customer/customer.module').then(m => m.CustomerPageModule)
          }
        ]
      },
      {
        path: 'menu-customer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-customer/menu-customer.module').then(m => m.MenuCustomerPageModule)
          }
        ]
      },
      {
        path: 'menu-carrier',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-carrier/menu-carrier.module').then(m => m.MenuCarrierPageModule)
          }
        ]
      },
      {
        path: 'menu-guide',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-guide/menu-guide.module').then(m => m.MenuGuidePageModule)
          }
        ]
      },
      {
        path: 'addguide',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../addguide/addguide.module').then(m => m.AddguidePageModule)
          }
        ]
      },
      {
        path: 'searchguide',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../searchguide/searchguide.module').then(m => m.SearchguidePageModule)
          }
        ]
      },
      {
        path: 'deleteguide',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deleteguide/deleteguide.module').then(m => m.DeleteguidePageModule)
          }
        ]
      },
      {
        path: 'menu-product',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-product/menu-product.module').then(m => m.MenuProductPageModule)
          }
        ]
      },
      {
        path: 'menu-zone',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu-zone/menu-zone.module').then(m => m.MenuZonePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
