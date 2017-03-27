import { Component, OnInit, Input } from '@angular/core';
import {AddressService} from '../address.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private address: AddressService) {
  }

  ngOnInit() {
    console.log('about')
  }

}
