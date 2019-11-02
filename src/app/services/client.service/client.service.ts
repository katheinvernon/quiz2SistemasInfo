import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: AngularFirestore) { }


  createClientOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("clientOrders")
        .add(data)
        .then(res => { resolve(true) }, err => reject(err));
    });
  }

  getClientOrder() {
    return this.firestore.collection("clientOrders").snapshotChanges();
  }
}