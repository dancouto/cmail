import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: ['./cmail-list-isNgTemplate.component.css']
})
export class CmailListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
