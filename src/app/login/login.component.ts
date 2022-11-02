import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string ='';
password:string ='';
  constructor(public post:PostService) { }

  ngOnInit(): void {
  }
login(e:any){
  this.post.login(this.username,this.password)
}
}
