import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from './loader/loader.service';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCA cloud';
  user:any
  public Olduser:boolean = false;
  opened = false;
  gmail:any;
  image:any;
  isloggedin:boolean | undefined;
  constructor(public loaderService:LoaderService,private auth:AuthGuard,public post:PostService,public router:Router){
    // if(this.Olduser = true){
    //   this._snackBar.open("user already exist please login", "dismiss");
    // }else{
    //   console.log("done")
    // }

  }
  ngOnInit(){
    this.loggedin()
  this.user = localStorage.getItem('USER')
  this.image = localStorage.getItem('IMAGE')  
  this.gmail = localStorage.getItem('GMAIL')  
  }
   loggedin(){
    const token = localStorage.getItem('PCA_CLOUD_TOKEN')
    if(token){
    this.isloggedin = true
    }
    else{
     this.isloggedin = false
    }
   }

   logout(e:any){
     this.opened = !this.opened
    this.auth.logout()
  }
   
  sidenav(event:any){
    this.opened =  !this.opened
    event.preventDefault();
 }
   Delete_account(){
    this.opened = !this.opened
    const username = localStorage.getItem('USER');
    this.post.deleteaccount(username)
   }
   helpandsupport(){
    this.opened  = !this.opened
    this.router.navigate(['help_and_support'])
    }
    home(){
      
    this.router.navigate([''])
    }
}
