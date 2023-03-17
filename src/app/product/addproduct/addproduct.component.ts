import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(public fb:FormBuilder,public prservice:ProductService,private activaterout:ActivatedRoute,private router:Router){}



  productform:FormGroup;



  ngOnInit(){

    this.productform=this.fb.group({
         pid:[0],
         productname: [],
         productaddress: [],
  
         supplyer:this.fb.group({
            sid:[],
            supplyername: [],
            supplyercontact: [],
            
  
          }) 
             
          
      
    })

    this.geteditdata()
  }




onsubmit(){
if(this.productform.controls['pid'].value<=0){  
  alert("savedata")
  this.prservice.postproduct(this.productform.value).subscribe();
  // this.router.navigate(['']);

}

else{
  alert("Updated")
  this.prservice.editproduct(this.productform.value).subscribe();
}
this.productform.reset();

}


geteditdata(){

  this.activaterout.paramMap.subscribe(parm=>{
  
    let productstring:string= parm.get("data");
  
    let product:any= JSON.parse(productstring);
  
    this.productform.patchValue({
  
          pid:product.pid,
          productname:product.productname,
          productaddress: product.productaddress,
          
  
  
  
          supplyer:{
            supplyername:product.supplyer.supplyername,
            supplyercontact:product.supplyer.supplyercontact ,
           
          }
           
  
      
    })
  })
  
  }













}
