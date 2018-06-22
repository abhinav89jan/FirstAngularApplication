import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html', // use html page or do inline query
//  template:`<p>
//  login-component works!
// </p>`,
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  name:string="";
  pass:string="";
  outResult:string="";
  outEvent:string="";
  isAddDisable=false;
  isOutDisable=false;
  isClass1Visible=false;
isBackgroundColor="green";



  constructor() { 
setTimeout(() => {
this.isAddDisable=true;
}, 2000);

setTimeout(() => {
  this.isOutDisable=true;
  this.isBackgroundColor="yellow";
    this.isClass1Visible=true;
  }, 10000);
  }

  ngOnInit() {
  }

  onAddClick()
  {
return this.outResult=this.name+" is created with "+this.pass;
  }

  oninputUpdate(event:Event)
  {
   return this.outEvent= "Name length is :"+(<HTMLInputElement>event.target).value+" Password length is "+(<HTMLInputElement>event.target).value;
   //return console.log(event);
    }
}
