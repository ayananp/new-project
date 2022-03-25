import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( ) { }
  public fee=[
    {"feetype":"anualfee","remarks":""},
    {"feetype":"culturalpgm","remarks":""},
    {"feetype":"onam","remarks":""},
    {"feetype":"onampgm","remarks":""}
  ]
  pushData(data:any){
    this.fee.unshift(data)
  }
}
