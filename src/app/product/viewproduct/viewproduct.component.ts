import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {


  constructor(private servicepl:ProductService,private router:Router){}

product:any[];

  ngOnInit(){
    this.servicepl.getproduct().subscribe((data:any)=>{
this.product=data

    })  

}

  

editproduct(p:any){
let productjson:string =JSON.stringify(p)
      // this.router.navigateByUrl("/product/addproduct/"+productjson)
      this.router.navigateByUrl("/product/editproduct/"+productjson)
}

deltedata(p:any){
  this.servicepl.deltedata(p).subscribe();
  window.location.reload()
}




}
