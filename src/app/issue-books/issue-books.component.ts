import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent {

  Name=""
  BookTitle=""
  DateofIssue=""
  Membershipnumber=""

  readissue=()=>
  {
    let data:any={"Name":this.Name,
  "BookTitle":this.BookTitle,
  "DateofIssue":this.DateofIssue,
  "Membershipnumber":this.Membershipnumber


  }
  console.log(data)
}
}
