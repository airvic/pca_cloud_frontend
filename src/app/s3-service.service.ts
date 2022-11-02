import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { environment } from 'src/environments/environment';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable({
  providedIn: 'root'
})
export class S3ServiceService {
  getSignedUrl(arg0: string, params: { Bucket: string; Key: any; ACL: string; ContentType: any; }, arg2: (err: any, url: any) => void) {
    throw new Error('Method not implemented.');
  }

  private bucket: S3Client;

  constructor(private http: HttpClient) {
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
   async uploadFileWithPreSignedURL(file: File) {
    const contentType = file.type;
  
    const params = {
      Bucket: 'pcacloud',
      Key: file.name,
      ACL: 'public-read',
      ContentType: contentType
    };

    const command = new PutObjectCommand(params)

    try {
      const preSignedURL = await getSignedUrl(this.bucket, command, { expiresIn: 3600});
      
      this.http.put(preSignedURL, file).subscribe({
        next: (res) => {
          console.log("success", res);
        },
        error: (err) => {
        window.alert("unable to save profile photo please check internet connection")
        },
        complete: () => {
          console.log("DONE")
        }
      })
    } catch(err) {
      console.log(err);
    }
  }



  async uploadphotos(file: File) {
    const contentType = file.type;
  
    const params2 = {
      Bucket: 'cloudfil',
      Key: file.name,
      ACL: 'public-read',
      ContentType: contentType
    };

    const command = new PutObjectCommand(params2)

    try {
      const preSignedURL = await getSignedUrl(this.bucket, command, { expiresIn: 3600});
      
      this.http.put(preSignedURL, file).subscribe({
        next: (res) => {
        },
        error: (err) => {
      console.log("unable to save profile photo please check internet connection" +err)
        },
        complete: () => {
          console.log("DONE")
        }
      })
    } catch(err) {
      console.log(err);
    }
  }
}
