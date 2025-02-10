import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fabricdetails',
  templateUrl: './fabricdetails.component.html',
  styleUrls: ['./fabricdetails.component.scss']
})
export class FabricdetailsComponent implements OnInit {
  dataform: any;


  constructor(public dialogRef: MatDialogRef<FabricdetailsComponent>, @Inject(MAT_DIALOG_DATA) public popdata: any){
    console.log("popdata",popdata.dataKey )
    this.dataform=popdata.dataKey;
  }

  ngOnInit(): void {
   
  }

}
