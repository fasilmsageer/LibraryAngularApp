import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  aadharnumber=""
  address=""
  pincode=""
  dob=""
  email=""
  phonenumber=""
  username=""
  password=""
  confirmpassword=""
                    
userRegister=()=>
{
  let data:any={
    
    "name":this.name,   
    "aadharnumber":this.aadharnumber,
    "address":this.address,
    "pincode":this.pincode,
    "dob":this.dob,
    "email":this.email,
    "phonenumber":this.phonenumber,
    "username":this.username,   
    "password":this.password,
    "confirmpassword":this.confirmpassword

  }

  console.log(data)
}


}
