import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Categorie } from '../services/item';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.page.html',
  styleUrls: ['./detail-category.page.scss'],
})
export class DetailCategoryPage implements OnInit {

  categorie: Categorie = null;

 constructor(private route: ActivatedRoute, private itemService: ItemService) {
	this.route.queryParams.subscribe(params => {
  	if (params && params.id) {
    	this.categorie = this.itemService.getcategory(params.id)
  	}
	})
  }

  ngOnInit() {
  }

}
