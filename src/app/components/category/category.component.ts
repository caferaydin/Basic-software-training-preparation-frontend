import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit{

  categories:Category[] = [];
  currentCategory : Category;

  constructor(
    private categoryService:CategoryService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["id"]){
        this.getByCategoryId(params["id"]);
      }else {
        this.getCategories();
      }
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    });
  }
  getByCategoryId(id:number){
    this.categoryService.getById(id).subscribe(response=> {
      this.categories = response.data
    });
  }

  setCurrentCategory(category:Category) {
    this.currentCategory = category;

  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item list-group-item-action active";
    }else {
      return "list-group-item list-group-item-action"
    }
  }
}
