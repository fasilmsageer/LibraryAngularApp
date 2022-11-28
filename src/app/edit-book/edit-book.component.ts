import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  BookTitle=""

  readedit=()=>
  {
    let data:any={"BookTitle":this.BookTitle}
    console.log(data)

  }


}
