import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { VisaCardService } from '../visa-card.service';

@Component({
  selector: 'app-help-you',
  templateUrl: './help-you.component.html',
  styleUrls: ['./help-you.component.css']
})
export class HelpYouComponent implements OnInit {
  openRefund:Boolean=false
  errMessage:any
  openForm:Boolean=false
  err:Boolean=false
  openCard:Boolean=false
  isLoading:Boolean=false
  carDetails:any={}
  visaForm:FormGroup=new FormGroup({
   name:new FormControl('',[Validators.required]),
   amount:new FormControl(null,[Validators.required]),
  owner:new FormControl(null)
  })
  
  constructor(private VisaCardService:VisaCardService){}
  refundForm:FormGroup=new FormGroup({
    number:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{16}$')])
  })
// open refundForm
openRefundForm()
{
  this.openRefund=true
}
// close 
closeRefundForm()
{
  this.openRefund=false
}
// open creationForm
open()
{
  this.openForm=true
}
// close form
close()
{
  this.openForm=false
}
colseVisaCard()
{
  this.openCard=false
}
// submit visa details
sendData()
{
  this.isLoading=true
  const token=localStorage.getItem('token')
  if(token)
  {
    let decodedToken:any=jwtDecode(token)
    this.visaForm.get('owner')?.setValue(decodedToken.userId)
    this.VisaCardService.generateVisa(this.visaForm.value).subscribe({
      next:(res)=>{
        if(res.message=="Visa credit card created successfully")
        {
          this.carDetails=res
          this.openForm=false,
          this.openCard=true
          console.log(this.carDetails)
          this.isLoading=false

        }else
        {
          this.errMessage=res
          this.err=true
          this.isLoading=false
          console.log(res)
        }
      }
    })
  }
  console.log(this.visaForm.value)
  
}
refund()
{
  this.VisaCardService.refundMony(this.refundForm.value).subscribe({
    next:(res)=>
    {
      if(res.message=='the rest of visa balance is refunded')
      {
        alert('your money is bakc')
        this.openRefund=false
      }else
      {
        alert(res.message)
        this.openRefund=false
      }
    }
    }
   
  )
}
  ngOnInit(): void {
    
  }
}
