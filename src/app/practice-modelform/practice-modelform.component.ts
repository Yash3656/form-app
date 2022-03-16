import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice-modelform',
  templateUrl: './practice-modelform.component.html',
  styleUrls: ['./practice-modelform.component.css']
})
export class PracticeModelformComponent implements OnInit {
  title = 'Form-App Project';
     todaydate:any;
     componentproperty:any;
     emailid:any;
     formdata:any;
     constructor(private myservice: MyserviceService) { }
     ngOnInit() {
        // this.todaydate = this.myservice.showTodayDate();
        this.formdata = new FormGroup({
           emailid: new FormControl("angular@gmail.com"),
           passwd: new FormControl("abcd1234")
        });
     }
     onClickSubmit(data:any) {this.emailid = data.emailid;}

}
