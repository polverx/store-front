
import {RouterModule, Routes,  } from '@angular/router';
import {ItemsComponent} from "./components/items/items.component";

const APP_ROUTES: Routes = [
  {path: 'items' , component: ItemsComponent},
  // {path: 'buySale' , component: SaleBuyComponent},
  // {path: 'saleProduct' , component: SaleProductsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'items' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
