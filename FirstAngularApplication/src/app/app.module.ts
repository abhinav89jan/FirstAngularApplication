import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { ServerService } from './ServerService';
import { ProductServices } from './product-component/ProductServices';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    LoginComponentComponent,
    CustomerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'Login',
        component: LoginComponentComponent
      },
      {
        path: 'Product',
        component: ProductComponentComponent
      },
      {
        path: 'Customer',
        component: CustomerComponent
      }
    ])
  ],
  providers: [ServerService, ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
