import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger !: MatMenuTrigger;

  ishomeClicked: boolean = false;
  isvedhaClicked: boolean = false;
  mtshow: boolean = false;
  marketClicked: boolean = false;
  isnlatexClicked: boolean = false;


  public activeabout = {
    showvedha: false,
    showsustain: false,
    showsocial: false,
    showourprod: false,
    showorg: false,

  }

  public actibeMAT = {
    zm: false,
    EM: false,
    TCM: false,
    MT: false,
    MM: false
  }


  public activeaboutNL = {
    outlatex: false,
    benifits: false,
    harvestinglatex: false,
    natural: false,
    defects: false,
  }

  public actibeBED = {
    bed : false
  }

  
  constructor(private router: Router,private local: LocalstorageService) { }

  ngOnInit(): void {
  }



  openMyMenu() {
    this.trigger.toggleMenu();
  }

  ///////////////////////about us click event////////////////

  movehoem() {
    this.router.navigate(['/Home']);

  }

  vedha() {
    this.isvedhaClicked = true;

    this.activeabout.showvedha = true;
    this.activeabout.showsustain = false;
    this.activeabout.showsocial = false;
    this.activeabout.showourprod = false;
    this.activeabout.showorg = false;

    this.router.navigate(['/vedha']);
  }

  sustainability() {
    this.isvedhaClicked = true;

    this.activeabout.showvedha = false;
    this.activeabout.showsustain = true;
    this.activeabout.showsocial = false;
    this.activeabout.showourprod = false;
    this.activeabout.showorg = false;

    this.router.navigate(['/sustainability']);
  }

  socialresponce() {
    this.isvedhaClicked = true;

    this.activeabout.showvedha = false;
    this.activeabout.showsustain = false;
    this.activeabout.showsocial = true;
    this.activeabout.showourprod = false;
    this.activeabout.showorg = false;

    this.router.navigate(['/socialresponce']);
  }

  productprocess() {
    this.isvedhaClicked = true;

    this.activeabout.showvedha = false;
    this.activeabout.showsustain = false;
    this.activeabout.showsocial = false;
    this.activeabout.showourprod = true;
    this.activeabout.showorg = false;

    this.router.navigate(['/productprocess']);
  }

  organiclatex() {
    this.isvedhaClicked = true;

    this.activeabout.showvedha = false;
    this.activeabout.showsustain = false;
    this.activeabout.showsocial = false;
    this.activeabout.showourprod = false;
    this.activeabout.showorg = true;

    this.router.navigate(['/organiclatex']);
  }


  //////////////////market ///////////////

  MarketClickedevent() {
    this.marketClicked = !this.marketClicked;
    this.mtshow = false;

  }


  ////////////////////////natural latex click event/////////////////////////


  ourlatex() {

    this.isnlatexClicked = true;

    this.activeaboutNL.outlatex = true;
    this.activeaboutNL.benifits = false;
    this.activeaboutNL.harvestinglatex = false;
    this.activeaboutNL.natural = false;
    this.activeaboutNL.defects = false;

    this.router.navigate(['/ourlatex']);

  }


  benifits() {
    this.isnlatexClicked = true;

    this.activeaboutNL.outlatex = false;
    this.activeaboutNL.benifits = true;
    this.activeaboutNL.harvestinglatex = false;
    this.activeaboutNL.natural = false;
    this.activeaboutNL.defects = false;

    this.router.navigate(['/benifits']);
  }

  harvesting() {
    this.isnlatexClicked = true;

    this.activeaboutNL.outlatex = false;
    this.activeaboutNL.benifits = false;
    this.activeaboutNL.harvestinglatex = true;
    this.activeaboutNL.natural = false;
    this.activeaboutNL.defects = false;
    this.router.navigate(['/harvesting']);
  }


  naturallatex() {
    this.isnlatexClicked = true;

    this.activeaboutNL.outlatex = false;
    this.activeaboutNL.benifits = false;
    this.activeaboutNL.harvestinglatex = false;
    this.activeaboutNL.natural = true;
    this.activeaboutNL.defects = false;
    this.router.navigate(['/natrualvssynthetic'])
  }

  defectslatex() {
    this.isnlatexClicked = true;

    this.activeaboutNL.outlatex = false;
    this.activeaboutNL.benifits = false;
    this.activeaboutNL.harvestinglatex = false;
    this.activeaboutNL.natural = false;
    this.activeaboutNL.defects = true;
    this.router.navigate(['/defectslatex'])

  }

  ////////////////////////////////////Mattress and Toppers////////////

  ZM() {
    this.mtshow = true;

    this.actibeMAT.zm = true;
    this.actibeMAT.EM = false;
    this.actibeMAT.TCM = false;
    this.actibeMAT.MT = false;
    this.actibeMAT.MM = false;
    this.router.navigate(['/zonedmattress'])


  }

  EM() {
    this.mtshow = true;

    this.actibeMAT.zm = false;
    this.actibeMAT.EM = true;
    this.actibeMAT.TCM = false;
    this.actibeMAT.MT = false;
    this.actibeMAT.MM = false;

    this.router.navigate(['/embossedmattress'])

  }

  TCM() {
    this.mtshow = true;

    this.actibeMAT.zm = false;
    this.actibeMAT.EM = false;
    this.actibeMAT.TCM = true;
    this.actibeMAT.MT = false;
    this.actibeMAT.MM = false;

    this.router.navigate(['/temperaturemattress'])

  }

  MT() {
    this.mtshow = true;

    this.actibeMAT.zm = false;
    this.actibeMAT.EM = false;
    this.actibeMAT.TCM = false;
    this.actibeMAT.MT = true;
    this.actibeMAT.MM = false;

    this.router.navigate(['/mattresstoppers'])

  }

  MM() {
    this.mtshow = true;

    this.actibeMAT.zm = false;
    this.actibeMAT.EM = false;
    this.actibeMAT.TCM = false;
    this.actibeMAT.MT = false;
    this.actibeMAT.MM = true;

    this.router.navigate(['/medicalmatttess'])



  }

  bed(){
    this.actibeBED.bed = true;
    this.router.navigate(['/bedding'])
  }


// Paddington(){
//   this.router.navigate(['/latex']);
//   /////////////////bedding///////////////

 

// }


Paddington() {
  console.log("this.router.url",this.router.url)
  // return this.router.url == routePath;
}
  
}




