import { Component, OnInit } from '@angular/core';
import {Address} from '../address'
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formData = new Address();

  constructor(private addressService : AddressService) { }

  ngOnInit(): void {
  }

  saveData(){
    console.log("Saving Data");
    console.log(this.formData);

    this.addressService.saveAddress(this.formData);


  }
}
