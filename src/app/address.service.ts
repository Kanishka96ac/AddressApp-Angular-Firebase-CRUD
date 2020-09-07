import { Injectable } from '@angular/core';
import { Address } from './address';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private fireStore : AngularFirestore) { }

  saveAddress(address : Address){
    console.log("From Service class");
    console.log(address);

    //save Data to firebase

    this.fireStore.collection("address").add({...address})

  }
}
