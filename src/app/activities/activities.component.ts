import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  username:any = []
  usernam:any = []

  constructor(private post:PostService) { }

  ngOnInit(): void {
  this.getact()
  }

  getact(){
    this.post.getactivities().subscribe(res =>{
      this.username = res
      this.usernam = this.username.reverse()
    })
  }
}
