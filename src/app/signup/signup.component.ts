import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import { Router, TitleStrategy } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { PostService } from '../post.service';
import { FormGroup,FormControl } from '@angular/forms';
import { S3ServiceService } from '../s3-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   selectedFile:any;
  ddd:any
  my_data = {}
  fb:any;
  images:any;
  wrongpassword:boolean = false
  name = '';
  gmail = '';
  password = '';
  conpassword ='';
  username = '';
  nofile: boolean = false;
  form!: FormGroup<any>;
  file:any;
  filefrombucket:any;
   


  constructor(public post : PostService,public router:Router,public auth:AuthGuard,private s3Service:S3ServiceService) { 
  };

  ngOnInit(): void {
//     this.form = new FormGroup({
//    name: new FormControl(null),
//   username:new FormControl(null),
//   gmail:new FormControl(null),
//  password:new FormControl(null),
//  image:new FormControl(null)
//     })
    this.post.checkconnection();
    const token = localStorage.getItem('PCA_CLOUD_TOKEN')
  if(token){
    // this.router.navigate(['dashboard'])
  }
  else{
    //do nothing
  }
  }


  async onfile(event:any){
    const allowedfiles = ["image/png","image/jpeg","image/jpg"];
       this.file = event.target.files[0]
   
    
      this.filefrombucket = 'https://pcacloud.s3.amazonaws.com/'+this.file.name;

   if(this.file && allowedfiles.includes(this.file.type)){
    await this.s3Service.uploadFileWithPreSignedURL(event.target.files[0])
   }else{
    window.alert("only png,jpeg,jpg files are allowed!!!")
    this.file = undefined
   }
   
  }
  
  signup(){
 if(this.password === this.conpassword && this.file){
  this.post.signup(this.name,this.username,this.password,this.gmail,this.filefrombucket).subscribe(res =>{
    if(res == true){
      console.log(res)
      window.alert("user already exists please login in")
      this.router.navigate(['login'])
    }else{
      window.alert("successfully created your account.. login!")
      this.router.navigate(['dashboard'])
    }
  })
 }else{
  window.alert("please check all fields properly only images are allowed!")
 }

  }

  loginpage(){
    this.router.navigate(['login'])
  }

}
