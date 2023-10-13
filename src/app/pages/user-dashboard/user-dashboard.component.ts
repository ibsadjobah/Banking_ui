import { Component, OnInit } from '@angular/core';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<LightInfoInput> = []

  constructor() {
    this.initializeAccountInfo()
   }

  ngOnInit(): void {
  }

  private initializeAccountInfo(){

    this.accountInfoList = [
      {
        title: 'Account balance',
        amount:23345, 
        infoStyle:'bg-primary'

      },

      {
        title: 'Highest transferT',
        amount:23345, 
        infoStyle:'bg-warning'

      },

      {
        title: 'Highest deposit',
        amount:344565, 
        infoStyle:'bg-success'

      }
  ]

  }

}
