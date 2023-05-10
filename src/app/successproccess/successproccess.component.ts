import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successproccess',
  templateUrl: './successproccess.component.html',
  styleUrls: ['./successproccess.component.css']
})
export class SuccessproccessComponent implements OnInit  {
  constructor(private Router:Router){}

  ngOnInit(): void {
    setTimeout(
        ()=>{
          this.Router.navigate(['/userPage'])
        },1000
    )
  }
}
