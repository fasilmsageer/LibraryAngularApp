import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {

  constructor(private api:ApiService){
    

    api.viewbook().subscribe(
  
      (response)=>{
        this.searchdata=response;
      }
    )
  
  }
  
  title=""
  searchdata:any=[]

  

  readsearch=()=>
  {
    let data:any={"title":this.title}
    console.log(data)

    this.api.searchbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid book title")
        }else{
          this.searchdata = response;
        }
      }
    )
  }

 

  }

