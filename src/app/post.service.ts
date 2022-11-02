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
    this.http.get('home').subscribe(res =>{
      if(true){

      }
      else{
        window.alert("unestablished connection")
      }
    })
   }
  signup(name:any,username:any,password:any,gmail:any,filefrombucket:any){
  // console.log(name)
  return this.http.post('signup',{
    name,username,password,gmail,filefrombucket
  })

  }
  postimagelink(url:any){
    // console.log(name)
    return this.http.post('saveurl',{
    url
    })
  
    }
  


login(username:any,password:any){
  this.http.post<Obj>('login',{
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
  return this.http.get('activities')
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
return this.http.get('image')
}

deletephoto(image:any){
  console.log(image)
  return this.http.post('deletephoto',{
    image
  });
}


}
