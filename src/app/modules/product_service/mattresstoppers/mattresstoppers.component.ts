import { Component } from '@angular/core';

@Component({
  selector: 'app-mattresstoppers',
  templateUrl: './mattresstoppers.component.html',
  styleUrls: ['./mattresstoppers.component.scss']
})

export class MattresstoppersComponent {


  public activefilter = {
    showsoft: true,
    showfirm: false,
    showmediumfirm: false,
  }

  public activefilternext = {
    showsingle: false,
    showdouble: false,
    showqueen: false,
    showking: false,
  }

  public show = {
    soft_single : false,
    soft_double : false,
    soft_queen :false,
    soft_king:false

  }

  public firms = {
    firm_single : false,
    firm_double : false,
    firm_queen :false,
    firm_king:false

  }

  public mediumfirms = {
    firm_single : false,
    firm_double : false,
    firm_queen :false,
    firm_king:false

  }

  

  

  filterone:any;
  filtertwo:any;

  ngOnInit(): void {
    this.soft();
    this.single();
  }

  /////////////////////////////////

  soft() {
    this.activefilter.showsoft = true;
    this.activefilter.showfirm = false;
    this.activefilter.showmediumfirm = false;
    this.filterone=1

    this.getallsize();
  }

  firm() {
    this.activefilter.showsoft = false;
    this.activefilter.showfirm = true;
    this.activefilter.showmediumfirm = false;
    this.filterone=2

    this.getallsize();
  }

  softfirm() {
    this.activefilter.showsoft = false;
    this.activefilter.showfirm = false;
    this.activefilter.showmediumfirm = true;
    this.filterone=3

    this.getallsize();
  }

  //////////////////////////////

  single() {
    this.activefilternext.showsingle = true;
    this.activefilternext.showdouble = false;
    this.activefilternext.showqueen = false;
    this.activefilternext.showking = false;
    this.filtertwo=1;

    this.getallsize();
  }

  double() {
    this.activefilternext.showsingle = false;
    this.activefilternext.showdouble = true;
    this.activefilternext.showqueen = false;
    this.activefilternext.showking = false;
    this.filtertwo=2;

    this.getallsize();
  }

  queen() {
    this.activefilternext.showsingle = false;
    this.activefilternext.showdouble = false;
    this.activefilternext.showqueen = true;
    this.activefilternext.showking = false;
    this.filtertwo=3;

    this.getallsize();

  }

  king() {
    this.activefilternext.showsingle = false;
    this.activefilternext.showdouble = false;
    this.activefilternext.showqueen = false;
    this.activefilternext.showking = true;
    this.filtertwo=4;

    this.getallsize();
  }

  getallsize(){
    if(this.filterone == 1 && this.filtertwo == 1){
      this.show.soft_single = true;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
      
    }

    else if(this.filterone == 1 && this.filtertwo == 2){
      this.show.soft_single = false;
      this.show.soft_double = true;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 1 && this.filtertwo == 3){
      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = true;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 1 && this.filtertwo == 4){
      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = true;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 2 && this.filtertwo == 1){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = true;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 2 && this.filtertwo == 2){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = true;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 2 && this.filtertwo == 3){
      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = true;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 2 && this.filtertwo == 4){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = true;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 3 && this.filtertwo == 1){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = true;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 3 && this.filtertwo == 2){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;

      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = true;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = false;

    }

    else if(this.filterone == 3 && this.filtertwo == 3){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;


      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = true;
      this.mediumfirms.firm_king = false;
    }

    else if(this.filterone == 3 && this.filtertwo == 4){

      this.show.soft_single = false;
      this.show.soft_double = false;
      this.show.soft_queen = false;
      this.show.soft_king = false;


      this.firms.firm_single = false;
      this.firms.firm_double = false;
      this.firms.firm_queen = false;
      this.firms.firm_king = false;

      this.mediumfirms.firm_single = false;
      this.mediumfirms.firm_double = false;
      this.mediumfirms.firm_queen = false;
      this.mediumfirms.firm_king = true;
    }

  }

}