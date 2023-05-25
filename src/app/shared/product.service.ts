import { Inject, Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  bookingListRef: AngularFireList<any>;

  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) {
    this.bookingListRef = db.list(this.dbPath);
  }

  // Create

  createProduct(apt: Product) {
    return this.bookingListRef.push({
      name: apt.name,

      desc: apt.desc,

      price: apt.price,
    });
  }

  // Get Single

  getProduct(id: string) {
    this.bookingRef = this.db.object('/Product/' + id);

    return this.bookingRef;
  }

  // Get List

  getProductList() {
    this.bookingListRef = this.db.list('/Product');

    return this.bookingListRef;
  }

  // Update

  updateProduct(id: any, apt: Product) {
    return this.bookingRef.update({
      name: apt.name,

      desc: apt.desc,

      price: apt.price,
    });
  }

  // Delete

  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/Product/' + id);

    this.bookingRef.remove();
  }
}
