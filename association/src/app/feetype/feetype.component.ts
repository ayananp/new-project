import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-feetype',
  templateUrl: './feetype.component.html',
  styleUrls: ['./feetype.component.css']
})
export class FeetypeComponent implements OnInit {
  element: any;

  constructor() { }

  ngOnInit(): void {
  }
  role=[]
  submit()
  {
 this.element=document.getElementsByClassName('fee_form')
 const list={
  list:this.element.form.feetype.value,
  remark:this.element.form.remarks.value
 }
 
 console.log(list)
  
//  this.fee.pushData(list)


  }


  public fee=[
    {"feetype":"anualfee","remarks":""},
    {"feetype":"culturalpgm","remarks":""},
    {"feetype":"onam","remarks":""},
    {"feetype":"onampgm","remarks":""}
  ]

}
