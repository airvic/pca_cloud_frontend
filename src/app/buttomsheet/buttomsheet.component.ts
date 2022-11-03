import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA }from '@angular/material/bottom-sheet';
import { saveAs } from 'file-saver'; 
import { PostService } from '../post.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buttomsheet',
  templateUrl: './buttomsheet.component.html',
  styleUrls: ['./buttomsheet.component.css']
})

export class ButtomsheetComponent implements OnInit {
  status: any;
  constructor( @Inject(MAT_BOTTOM_SHEET_DATA) public data:any,private _bottomSheetRef: MatBottomSheetRef<MatBottomSheetRef>,public post:PostService,private httpClient:HttpClient) {}
   image = this.data


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {
    console.log(this.image)
   
  }
  async delete(image:any){
   await this.post.deletephoto(image).subscribe(res =>{
  if(res = true){
    window.alert('successfully deleted photo!')
  }else{
    window.alert('an error occured!!')
  }
   })
    this._bottomSheetRef.dismiss()
  }
async download(image:any){
  
 console.log("navigating")  }

}
