import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES} from '../models';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchString: string = "";
  searchCategory: string = "any";

  validCategories: string[] = CATEGORIES;

  constructor(private router: Router) { }

  onSearch() {
    let options: any = {};
    if(this.searchString != "") {
      options.search = this.searchString.replace(/\W/g, '');
    }
    if(this.searchCategory != "any") {
      options.category = this.searchCategory.replace(/\W/g, '');
    }

    this.router.navigate(['/product-list', options]);
  }

}
