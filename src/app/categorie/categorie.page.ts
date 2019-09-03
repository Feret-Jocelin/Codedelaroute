import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Categorie } from '../services/item';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories: Categorie[] = null;


  constructor(private itemService: ItemService, private router: Router) {

  this.getItems();

  }

  ngOnInit() {
  }

  getItems() {
  this.categories = this.itemService.getAllCategory();
  }

  onClickItem(itemId) {
  let navigationExtras: NavigationExtras = {
    queryParams: { id: JSON.stringify(itemId) }
  }
  this.router.navigate(['detail-category'], navigationExtras)
  }

}
