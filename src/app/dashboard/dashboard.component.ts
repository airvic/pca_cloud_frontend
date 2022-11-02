import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  Reslength:any;
  Res:any;
  newstore:any;
   capacity:any;

  constructor(public auth:AuthGuard,private post:PostService) { }

  ngOnInit(): void {
    this.auth.isloggin()
     this.user = localStorage.getItem('USER')  
     this.getimageno()
  }
  getimageno(){
    this.post.getimages().subscribe(res =>{
      this.Res = res
      this.Reslength = this.Res.length
      this.newstore = this.Res.length - this.capacity;
    })
  }


}
