import { Component, OnInit } from '@angular/core';
import {AddressService} from '../address.service';
@Component({
  selector: 'app-about-sidebar',
  templateUrl: './about-sidebar.component.html',
  styleUrls: ['./about-sidebar.component.css']
})
export class AboutSidebarComponent implements OnInit {

  constructor(private address: AddressService) { }

  ngOnInit() {
  }

}
