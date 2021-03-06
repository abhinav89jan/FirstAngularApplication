import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModel } from 'src/app/product-component/Product.Model';
import { RequestOptions } from '@angular/http';

@Injectable()
export class ProductServices {
    constructor(private http: Http) {
    }

    GetProductById(productId) {
        return this.http.get('http://localhost:65297/api/Product/ProductById?id=' + productId).pipe(map(data => {
            return data.json();
        }));
    }

    GetProductList() {
        return this.http.get('http://localhost:65297/api/Product/Product').pipe(map(data => {
            return data.json();
        }));
    }
    GetProductListByFilter(id, name) {
        return this.http.get('http://localhost:65297/api/Product/ProductByFilter', {
            params: {
                'id': id,
                'name': name
            }
        }).pipe(map(data => {
            return data.json();
        }));
    }
}