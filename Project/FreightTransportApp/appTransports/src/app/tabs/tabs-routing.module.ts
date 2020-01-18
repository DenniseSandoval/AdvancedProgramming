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
