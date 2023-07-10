import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'products/category/:id', component: ProductComponent },
  {
    path: 'product/add',
    component: ProductAddComponent,
    canActivate: [loginGuard],
  },

  { path: 'Category/:id', component: CategoryComponent },

  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'register', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
