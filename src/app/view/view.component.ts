import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ButtomsheetComponent } from '../buttomsheet/buttomsheet.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  imageurl:any;
  resarray:any = []
  constructor(private post:PostService,private _bottomSheet: MatBottomSheet) { }
  openBottomSheet(e:any): void {
    this._bottomSheet.open(ButtomsheetComponent,{
      data: e
    });
  }

  ngOnInit(): void {
   this.getimage();
 
  }

  getimage(){
    this.post.getimages().subscribe(res=>{
      
      console.log(res)
      this.resarray = res
    })
  }
  action(e:any){
    console.log(e)
  }
}
