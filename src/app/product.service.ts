import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  

  postproduct(Product:FormGroup){
    
   return this.http.post("http://localhost:9095/saveproduct",Product)
  }

  getproduct(){
    return this.http.get("http://localhost:9095/getall")
  }

  editproduct(Product:any){
    return this.http.put("http://localhost:9095/editpl/"+Product.pid,Product)

  }

  deltedata(Product:any){
    return this.http.delete("http://localhost:9095/deletepl/"+Product.pid)
  }

}
