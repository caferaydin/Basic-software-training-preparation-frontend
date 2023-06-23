import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path:"", component:ProductComponent },
  { path:"Products", component:ProductComponent },
  { path:"products/category/:id", component:ProductComponent },


  
  { path:"Category/:id", component:CategoryComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
