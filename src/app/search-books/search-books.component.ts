import { Component } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {
  BookTitle=""

  readsearch=()=>
  {
    let data:any={"BookTitle":this.BookTitle}
    console.log(data)

  }



}
