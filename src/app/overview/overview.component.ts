import { Component,OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(private WalletService:WalletService){}
  displayTransition:Boolean=false
  transactions:any[]=[]
  // set state color
  pending:Boolean=false
  success:Boolean=true
  failed:Boolean=false
  ngOnInit(): void {
    this.WalletService.getALL().subscribe({
      next:(res)=>{
        this.transactions=res.transactions
        if(this.transactions.length<1)
        {
          this.displayTransition=false
        }else
        {
          this.displayTransition=true
        }
        console.log(this.transactions)
      }
    })
  }
}
