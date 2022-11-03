import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { FileUploadServicService } from '../file-upload-servic.service';
import { S3ServiceService } from '../s3-service.service';
import { FileUpload } from '../upload/models/file-upload.model';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { environment } from 'src/environments/environment';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})

export class UploadfileComponent implements OnInit {
  
  private bucket: S3Client;
  errormsg:boolean = false;
  successmsg:boolean = false;
  selectedFiles:any = undefined
  currentFileUpload: any;
  msg:any;
  percentage: any;
file:any;
 filesarray:any =[];
  filefrombucket: any;
  url = 'https://cloudfil.s3.amazonaws.com/';
  constructor(private auth:AuthGuard,private s3:S3ServiceService,public http:HttpClient,private post:PostService,private router:Router) {
    this.bucket = new S3Client(
      {
        credentials: {
          accessKeyId: environment.AWS_ACCESS_KEY_ID,
          secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
        },
        region: environment.AWS_REGION,
      }
    );
    
}

  async ngOnInit(): Promise<void> {
  this.auth.isloggin()
}

  selectFile(event: any){
    event.preventDefault()
 this.selectedFiles = event.target.files;
 this.file = this.selectedFiles
 if(this.file.length > 4 ){
  this.msg = true

 }else{
  for (let i = 0; i < this.file.length; i++) {
    this.filesarray.push(this.file[i])
   
    
   }
   if(this.filesarray >4){
    this.msg =  true
  }
 }

 console.log(this.filesarray)
 }
 async Uploadfile() {

  

await this.filesarray.forEach(async (file: { type: any; name: any; })  => {
 
  const contentType = file.type;
  const params = {
    Bucket: 'cloudfil',
    Key: file.name,
    ACL: 'public-read',
    ContentType: contentType
  };
  const command = new PutObjectCommand(params)
  this.filefrombucket = 'https://cloudfil.s3.amazonaws.com/'+file.name;
  console.log(this.filefrombucket)
  await this.post.postimagelink(this.filefrombucket).subscribe(res=>{
    console.log(res)
    if(res == true){
   this.successmsg = true
    }else{
     window.alert("an error occured check files")
    }
  })
    
    try {
      const preSignedURL = await getSignedUrl(this.bucket, command, { expiresIn: 3600});
      
      await this.http.put(preSignedURL, file).subscribe({
        next: async (res) => {
          console.log("success");
          this.filefrombucket = 'https://cloudfil.s3.amazonaws.com/'+file.name;
          const done = await this.post.postimagelink(this.filefrombucket).subscribe(res=>{
            console.log(res)
            if(res == true){
           this.successmsg = true
            }else{
             window.alert("an error occured check files")
            }
          })
        },
        error: (err) => {
        console.log("unable to save profile photo please check internet connection")
        this.errormsg = true;
        },
        complete: async () => {
          console.log("DONE")
        }
      })
    } catch(err) {
      console.log(err)
    }
    
  
});

   

  }
  


 
}
