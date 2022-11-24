import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  },
  {
    path:"bookview",
    component:BookViewComponent
  },
  {
    path:"deletebook",
    component:DeleteBookComponent
  },
  {
    path:"editbook",
    component:EditBookComponent
  },
  {
    path:"issuebooks",
    component:IssueBooksComponent
  },
  {
    path:"searchbooks",
    component:SearchBooksComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userregistration",
    component:UserRegistrationComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    BookEntryComponent,
    BookViewComponent,
    SearchBooksComponent,
    DeleteBookComponent,
    IssueBooksComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
