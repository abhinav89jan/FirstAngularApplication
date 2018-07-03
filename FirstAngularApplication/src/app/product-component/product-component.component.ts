import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product-component/Product.Model';
import { ProductServices } from './ProductServices';

@Component({
    selector: 'app-product-component',
    templateUrl: './product-component.component.html',
    //styleUrls: ['./product-component.component.css'] //when use css class
    styles: [`p{
    color: green;
}`]
})
export class ProductComponentComponent implements OnInit {
    productId: number = 0;
    productName: string = "";

    pruductList: ProductModel[] = [];
    productStatus: string = "";
    productrecords: string = "";

    ngOnInit() {
    }

    constructor(private productServices: ProductServices) { }

    GetProductDetail() {
        return this.productName + " Byke";
    }

    onSubmit() {
        //this.pruductList.push(this.productName);
        //this.productStatus = this.productName + " is created succesfully";
        //return console.log(this.productStatus);
    }

    onGetProductById() {
        this.productServices.GetProductById(this.productId).subscribe(
            (response: any) => {
                this.pruductList = [];
                this.pruductList.push(new ProductModel(response.productID, response.name, response.productNumber, response.standardCost, "https://media.zigcdn.com/media/model/2018/Jan/avenger-street-220_600x300.jpg"))
            },
            (error) => console.log(error))
    }

    onGetProductList() {
        this.productServices.GetProductList().subscribe(
            (response: any) => {
                this.pruductList = [];
                for (let item of response) {
                    this.pruductList.push(new ProductModel(item.productID, item.name, item.productNumber, item.standardCost, "https://media.zigcdn.com/media/model/2018/Jan/avenger-street-220_600x300.jpg"))
                }
            },
            (error) => console.log(error))
    }

    onGetProductListByFilter() {
        this.productServices.GetProductListByFilter(this.productId, this.productName).subscribe(
            (response: any) => {
                this.pruductList = [];
                for (let item of response) {
                    this.pruductList.push(new ProductModel(item.productID, item.name, item.productNumber, item.standardCost, "https://media.zigcdn.com/media/model/2018/Jan/avenger-street-220_600x300.jpg"))
                }
            },
            (error) => console.log(error))
    }
}