import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  image=""
  author=""
  description=""
  publisher=""
  language=""
  distributer=""
  releasedyear=""
  price=""

  constructor(private api:ApiService){}


  readValues=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "author":this.author,
      "description":this.description,
      "publisher":this.publisher,
      "language":this.language,
      "distributer":this.distributer,
      "releasedyear":this.releasedyear,
      "price":this.price
    }
    console.log(data)

    this.api.addbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.title=""
          this.image=""
          this.author=""
          this.description=""
          this.publisher=""
          this.language=""
          this.distributer=""
          this.releasedyear=""
          this.price=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }

}
