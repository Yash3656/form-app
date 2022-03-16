import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-practice-validator',
  templateUrl: './practice-validator.component.html',
  styleUrls: ['./practice-validator.component.css']
})
export class PracticeValidatorComponent implements OnInit {
  todaydate:any;
  emailid:any;
  formdata:any;
  constructor(){ }
  ngOnInit(){
    this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd: new FormControl("", this.passwordvalidation)
     });
  }
  passwordvalidation(formcontrol:any)
  {
    if(formcontrol.value.length < 8)
    {
      return{"passwd" : true};

    }
    return null;
  }
  onClickSubmit(data:any)
  {
    this.emailid=data.emailid;
  }
}
