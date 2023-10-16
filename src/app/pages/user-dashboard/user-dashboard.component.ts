import { Component, OnInit } from '@angular/core';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';
import { TransactionsService } from 'src/app/services/services/transactions.service';
//import { TransactionControllerService } from 'src/app/services/services';
//import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent  {

  accountInfoList: Array<LightInfoInput> = []

  constructor(
  private transactionService: TransactionsService  
  ) {
    this.initializeAccountInfo()
    
   }

  ngOnInit(): void {

    this.transactionService.findAll1()
    .subscribe({
      next: (data) => {
        console.log('Transaction List', data)
      }
    })
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
