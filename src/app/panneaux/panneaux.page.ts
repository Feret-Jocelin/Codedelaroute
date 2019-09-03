import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Panneau } from '../services/item';

@Component({
  selector: 'app-panneaux',
  templateUrl: './panneaux.page.html',
  styleUrls: ['./panneaux.page.scss'],
})
export class PanneauxPage implements OnInit {

panneaux : Panneau[] = null

  constructor(private itemService: ItemService, private router: Router) { 

  this.getItems()

  }

  ngOnInit() {
  }

  getItems() {
  this.panneaux = this.itemService.getAllPanneaux();
  }


}
