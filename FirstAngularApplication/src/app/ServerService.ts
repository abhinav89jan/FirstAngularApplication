import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  GetServers(productId) {
    return this.http.get('http://localhost:65297/api/Product/ProductById?id=' + productId);
  }

  GetDataList() {
    return this.http.get('http://localhost:65297/api/Product/Product');
  }
}
