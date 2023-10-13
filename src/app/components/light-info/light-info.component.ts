import { Component, OnInit, Input } from '@angular/core';

export interface LightInfoInput{
  title?:string;
  amount?:number;
  infoStyle?:'bg-primary' | 'bg-success' | 'bg-warning' | 'bg-danger';
}

@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.scss']
})
export class LightInfoComponent implements OnInit {

  
  @Input() infoInput: LightInfoInput = {};
 

  constructor() { }

  ngOnInit(): void {
  }

}
