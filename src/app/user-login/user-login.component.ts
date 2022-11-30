import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username=""
  password=""

  constructor(private router:Router){}



  readUserlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
  }
    console.log(data)

    if (this.username=="user" && this.password=="54321"){
      this.router.navigate(['/bookview'])
      alert("login success")
    } else {
      alert("login failed")
    }
  }


}
