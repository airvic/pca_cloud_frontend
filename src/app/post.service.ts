import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
// import { AppComponent } from './app.component';
interface Obj {
  success: boolean;
  user:string;
  token:string;
  msg: string;
  username: string;
  image:string;
  gmail:string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:5000/signup'; 


  
  constructor(public http:HttpClient,private router: Router,public auth:AuthGuard) { }
  
  ngOnInit(): void {
    
  }
   checkconnection(){
    this.http.get('http://localhost:3000/home').subscribe(res =>{
      if(true){
            console.log("true")
      }
      else{
        window.alert("unestablished connection")
      }
    })
   }
  signup(name:any,username:any,password:any,gmail:any,filefrombucket:any){
  // console.log(name)
  return this.http.post('http://localhost:3000/signup',{
    name,username,password,gmail,filefrombucket
  })

  }
  postimagelink(url:any){
    // console.log(name)
    return this.http.post('http://localhost:3000/saveurl',{
    url
    })
  
    }
  


login(username:any,password:any){
  this.http.post<Obj>('http://localhost:3000/login',{
    username,password
  }).subscribe(res =>{
   if(res.success){
this.auth.Storetoken(res.username,res.token,res.gmail,res.image)
   }else{
    window.alert("incorrect details please signup")
   }
  })

}
getactivities(){
  return this.http.post('http://localhost:3000/activities', {responseType: 'json'})
}
deleteaccount(username:any){
  return this.http.post<Obj>('deleteaccount',{username}).subscribe(res=>{
    if(res.success){
      localStorage.clear();
      this.router.navigate(['signup'])
    }else{
      window.alert('something went wrong!')
    }
  })
}

getimages(){
return this.http.post('http://localhost:3000/image', {responseType: 'json'})
}

deletephoto(image:any){
  console.log(image)
  return this.http.post('http://localhost:3000/deletephoto',{
    image
  });
}


}
