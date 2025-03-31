import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  { path: '', redirectTo: "/Dashboard", pathMatch: 'full' },
  { path: "Dashboard", component: DashboardComponent, pathMatch: 'full' },
  { path: "Products", component: ProductDetailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
