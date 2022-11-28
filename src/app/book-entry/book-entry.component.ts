import { Component } from '@angular/core';

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
  }

}
