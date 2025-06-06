import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  // { path:'', component:AppComponent},
  { path:'', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  { path:'about', component:AboutComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'product', component:BenchmarkComponent},
  { path: 'pagination', component:PaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
