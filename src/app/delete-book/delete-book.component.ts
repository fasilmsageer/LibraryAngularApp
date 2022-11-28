import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  BookTitle=""

  readdelete=()=>
  {
    let data:any={"BookTitle":this.BookTitle}
    console.log(data)

  }


}
