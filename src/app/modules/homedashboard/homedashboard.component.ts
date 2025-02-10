import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.scss']
})
export class HomedashboardComponent implements OnInit {

  @ViewChild('details2') details2: ElementRef | any;

  constructor(private router: Router,) { }
  ngOnInit(): void {
  }

  ZM() {
    this.router.navigate(['/zonedmattress'])
  }

  EM() {
    this.router.navigate(['/embossedmattress'])
  }

  TCM() {
    this.router.navigate(['/temperaturemattress'])
  }

  MT() {
    this.router.navigate(['/mattresstoppers'])
  }

  MM() {
    this.router.navigate(['/medicalmatttess'])
  }

  bed(){
    this.router.navigate(['/bedding'])
  }

  movetotop() {
    console.log("Function called");
    this.details2.nativeElement.scrollIntoView();
  }

}
