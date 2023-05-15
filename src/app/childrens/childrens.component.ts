import { TransactionsService } from './../transactions.service';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.css']
})
export class ChildrensComponent implements OnInit {
  err:Boolean=false
  errMessage:any
  chield:any
  amount:any
  closeForm:Boolean=false
  reciverName:String=''
  palance:number=0
  isLoading:Boolean=false
  transactionForm:FormGroup=new FormGroup({
    amount:new FormControl(null,[Validators.required]),
    sender:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    receiver:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    description:new FormControl(null,[Validators.required])
  })
  constructor(private TransactionsService:TransactionsService,private Router:Router){}
  // open confirmationScreen
  openConfirmationMessage()
  {
    this.closeForm=true
    this.amount= this.transactionForm.get('amount')?.value
    this.chield=this.transactionForm.get('receiver')?.value
  }
  // close confirmationScreen
 CloseConfirmationMessage()
  {
    this.closeForm=false

  }
  sendTransaction()
  {
    this.isLoading=true
    const sender=this.transactionForm.get('sender')?.value
    
// check if send mony to himself
    if(sender==this.reciverName)
    {
      this.isLoading=false
      alert('you can not send mony to yourSelf')
      this.Router.navigate(['/userPage'])
    }
    // send data
    else{
      let encodedToken=JSON.stringify(localStorage.getItem('token')) 
    let decodedToken:any=jwtDecode(encodedToken)
    // const wallet=decodedToken.wallet._id
    // this.transactionForm.get('sender')?.setValue(wallet)
      this.isLoading=true
      this.TransactionsService.makeTransaction(this.transactionForm.value).subscribe({
          next:(res)=>{
            if(res.message=='Done')
            {
              this.isLoading=false
              console.log(res)
              this.closeForm=false
              this.Router.navigate(['/userPage'])
            }
            else
            {
              this.isLoading=false
              this.err=true
              this.errMessage=res
              
            }
          }
      })
    }
    
  }
  ngOnInit(): void {
    
  }
}
