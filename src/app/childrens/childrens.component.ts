import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.css']
})
export class ChildrensComponent implements OnInit {
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
  // open confirmationScreen
  openConfirmationMessage()
  {
    this.closeForm=true
  }
  // close confirmationScreen
 CloseConfirmationMessage()
  {
    this.closeForm=false
  }
  ngOnInit(): void {
    
  }
}
