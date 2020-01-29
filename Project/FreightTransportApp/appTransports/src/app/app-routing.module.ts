import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'menu-customer',
    loadChildren: () => import('./menu-customer/menu-customer.module').then( m => m.MenuCustomerPageModule)
  },
  {
    path: 'searchcustomer',
    loadChildren: () => import('./searchcustomer/searchcustomer.module').then( m => m.SearchcustomerPageModule)
  },
  {
    path: 'searchcustomerid',
    loadChildren: () => import('./searchcustomerid/searchcustomerid.module').then( m => m.SearchcustomeridPageModule)
  },
  {
    path: 'deletecustomer',
    loadChildren: () => import('./deletecustomer/deletecustomer.module').then( m => m.DeletecustomerPageModule)
  },
  {
    path: 'updatecustomer/:id',
    loadChildren: () => import('./updatecustomer/updatecustomer.module').then( m => m.UpdatecustomerPageModule)
  },
  {
    path: 'menu-carrier',
    loadChildren: () => import('./menu-carrier/menu-carrier.module').then( m => m.MenuCarrierPageModule)
  },
  {
    path: 'menu-zone',
    loadChildren: () => import('./menu-zone/menu-zone.module').then( m => m.MenuZonePageModule)
  },
  {
    path: 'menu-product',
    loadChildren: () => import('./menu-product/menu-product.module').then( m => m.MenuProductPageModule)
  },
  {
    path: 'menu-guide',
    loadChildren: () => import('./menu-guide/menu-guide.module').then( m => m.MenuGuidePageModule)
  },
  {
    path: 'listcustomer',
    loadChildren: () => import('./listcustomer/listcustomer.module').then( m => m.ListcustomerPageModule)
  },
  {
    path: 'searchguide',
    loadChildren: () => import('./searchguide/searchguide.module').then( m => m.SearchguidePageModule)
  },
  {
    path: 'addguide',
    loadChildren: () => import('./addguide/addguide.module').then( m => m.AddguidePageModule)
  },
  {
    path: 'deleteguide',
    loadChildren: () => import('./deleteguide/deleteguide.module').then( m => m.DeleteguidePageModule)
  },
  {
    path: 'searclientdetail/:id',
    loadChildren: () => import('./searclientdetail/searclientdetail.module').then( m => m.SearclientdetailPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
