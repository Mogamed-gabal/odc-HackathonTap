import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-paymen-methods',
  templateUrl: './paymen-methods.component.html',
  styleUrls: ['./paymen-methods.component.css']
})
export class PaymenMethodsComponent implements OnInit {
  reciverName:String=''
  err:Boolean=false
  palance:number=0
  closeForm:Boolean=false
  isLoading:Boolean=false
  errMessage:any
  transactionForm:FormGroup=new FormGroup({
    amount:new FormControl(null,[Validators.required]),
    sender:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    receiver:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    description:new FormControl(null,[Validators.required])
  })
  constructor(private TransactionsService:TransactionsService,private Router:Router){

  }

  // open confirmationScreen
  openConfirmationMessage()
  {
    this.closeForm=true
    this.palance=this.transactionForm.get('amount')?.value
    this.reciverName=this.transactionForm.get('receiver')?.value
  }
  // close confirmationScreen
 CloseConfirmationMessage()
  {
    this.closeForm=false
  }
  // add proccess data toscreen
  
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
              this.Router.navigate(['/successproccess'])
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


