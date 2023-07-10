import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService : ProductService,
    private toastrService : ToastrService
    ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      productName: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      productDescription: ['', Validators.required],
    });
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.productAdd(productModel).subscribe(response => {
        this.toastrService.success(response.message, "Ürün Eklendi");
      },responseError => {
        if(responseError.error.Errors.length >0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage);
          }
        }
        // this.toastrService.error(responseError.error.Message)
      })
      
    }else {
      this.toastrService.error("Form verileri eksil");
    }
    

  }
}
