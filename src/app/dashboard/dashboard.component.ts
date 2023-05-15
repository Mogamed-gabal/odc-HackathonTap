import { Component ,OnInit ,OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import jwtDecode from 'jwt-decode';
import { WalletService } from '../wallet.service';
import { VisaCardService } from '../visa-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// 04/23
export class DashboardComponent implements OnInit {
  chieldErr:Boolean=false
  chieldMessage:any
  isLoading:Boolean=false
  isPaernt:Boolean=false
  isChiedl:Boolean=false
  errMessage:string=''
  err:Boolean=false
  transactions:any[]=[]
  id:any
  walletState:Boolean=false
  wallet:any
  currency:string=''
  openChieldeForm:Boolean=false
  balance:number=0;
  forParent:Boolean=true
  openForm:Boolean=false
  walletDeatils:any
  imgSrc:string="../../assets/img/Rectangle.png"
  // charge with visa
  monyForm:FormGroup=new FormGroup({
    number:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{16}$')]),
    name:new FormControl(null,[Validators.required]),
    cvv:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{3}$')]),
    phone:new FormControl(null),
    amount:new FormControl(null,[Validators.required]),
    expiryDateString:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{2}/[0-9]{2}$')])
  })  
  // userForm
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.minLength(6), Validators.maxLength(25), Validators.required]),
    ssid:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
    parent:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required]),
    role:new FormControl(null,[Validators.required])
  })
  // update userPalance
  updatePalanceForm:FormGroup=new FormGroup(
    {
      balance:new FormControl(null),

    }
  )

constructor(private _Router:Router ,private AuthService:AuthService,private WalletService:WalletService,private VisaCardService:VisaCardService){}

  // open card form to charge balance
  openCard()
  {
  this.walletState=true
  }
  // close it
  closeCard()
  {
    
      this.walletState=false
    
  }
  //addChieldToDataBas
  addChield()
  {
    this.openForm=true
  }
  // close registerForm
  closeForm()
  {
    this.openForm=false
  }
  // logOut
  logOut()
  {
    localStorage.removeItem('token')
    this._Router.navigate(['/login'])
  }
  // switch chield-form
  switchChield()
  {
    this.openChieldeForm=true
  }
  close()
  {
    this.openChieldeForm=false
  }
  // add chield
  sendChieldFormData()
  {
    this.isLoading=true
    const Parenttoken=localStorage.getItem('token')
    if(Parenttoken)
    {

      let decodedParenttoken:any=jwtDecode(Parenttoken)
      this.registerForm.get('role')?.setValue('child')
      const passVal=this.registerForm.get('password')?.value
      this.registerForm.get('confirmPassword')?.setValue(passVal)
      this.registerForm.get('parent')?.setValue(decodedParenttoken.ssid)
      // this.registerForm.get('email')?.setValue(decodedParenttoken.email)
      this.AuthService.signUp(this.registerForm.value).subscribe({
        next:(res)=>{
          if(res.message=='registered successfully')
          {
            this.isLoading=false
            this.closeForm()
            alert('child added successfully')
          }
          else
          {
            this.isLoading=false
            this.chieldErr=true
            this.chieldMessage=res
            console.log(res.message)
          }
        }
      })

      
   
    }
  }
  // chare balance with vise
  charge()
  {
   this.isLoading=true
    const check=localStorage.getItem('token')
    if(check)
    {
      let decodedToken:any=jwtDecode(check)
      this.monyForm.get('phone')?.setValue(decodedToken.phone)
      this.VisaCardService.payeWithVisa(this.monyForm.value).subscribe({
        next:(res)=>{
          if(res.message=="Done")
          {
            this.isLoading=false
            console.log(res)
            this.walletState=false
            // this.updatePalacnce()
          }
          else
          {
            this.errMessage=res
            this.err=true
            this.isLoading=false
            
          }
        }
      })
    }
    
  }
  // check user role and display featurs
  checkRole()
  {
    let data=localStorage.getItem('token')
    if(data)
    {
      let decodedToken:any=jwtDecode(data)
      if(decodedToken.role=='parent')
      {
        this.isPaernt=true
        this.isChiedl=false
      }else if(decodedToken.rloe=='child')
      {
        console.log('not hello')
      }
    }
  }
  // update wallet palance
  // updatePalacnce()
  // {
  //   const Data=localStorage.getItem('token')
  //   if(Data)
  //   {
  //     let decodedToken:any=jwtDecode(Data)
  //     const Current=decodedToken.wallet.balance
  //     const amount =this.monyForm.get('amount')?.value
  //     const newAount=amount+Current
  //     this.updatePalanceForm.get('amount')?.setValue(newAount)
  //      this.id=decodedToken.wallet._id
  //     this.WalletService.UpdateBalance(this.updatePalanceForm.value,this.id).subscribe({
  //       next:(res)=>console.log(res)
        
  //     })
      

  //   }
  // }
  ngOnInit(): void {
    this.checkRole()
    // get user Wallet
    const token=localStorage.getItem('token')
    if(token)
    {
      let decodedToken:any=jwtDecode(token)
      console.log(decodedToken.wallet.balance)
      this.WalletService.getUserWallet(decodedToken.wallet._id).subscribe({
        next:(res)=>{
        this.wallet=res
        console.log(this.wallet)
       
        if(this.balance!=0)
        {
          this.balance=0
        }
        this.balance=this.wallet.balance
        this.currency=this.wallet.currency
         }
        
      })
   
    }
    // get user transactions
    this.WalletService.getALL().subscribe({
      next:(res)=>{
        this.transactions=res.transactions
        // console.log(this.transactions)
      }
    })
}
}

