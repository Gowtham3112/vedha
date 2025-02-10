import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomedashboardComponent } from './modules/homedashboard/homedashboard.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoplayerComponent } from './modules/videoplayer/videoplayer.component';
import {MatCardModule} from '@angular/material/card';
import { TheptessagaComponent } from './modules/abouts_us/theptessaga/theptessaga.component';
import { SustainabilityComponent } from './modules/abouts_us/sustainability/sustainability.component'; 

import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SocialresponceComponent } from './modules/abouts_us/socialresponce/socialresponce.component';
import { ProductprocessComponent } from './modules/abouts_us/productprocess/productprocess.component';
import { OrganiclatexComponent } from './modules/abouts_us/organiclatex/organiclatex.component';

import { PaddingtonComponent } from './modules/latex/paddington/paddington.component';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { BenifitsComponent } from './modules/natural_latex/benifits/benifits.component';

import { MatTableModule } from '@angular/material/table';
import { HarvestingComponent } from './modules/natural_latex/harvesting/harvesting.component';
import { NatrualvssyntheticComponent } from './modules/natural_latex/natrualvssynthetic/natrualvssynthetic.component';
import { ZonemattressComponent } from './modules/product_service/zonemattress/zonemattress.component';
import { EmpoosedmattressComponent } from './modules/product_service/empoosedmattress/empoosedmattress.component';
import { TemperatureComponent } from './modules/product_service/temperature/temperature.component';
import { MattresstoppersComponent } from './modules/product_service/mattresstoppers/mattresstoppers.component';
import { MedicalmattressComponent } from './modules/product_service/medicalmattress/medicalmattress.component';
import { DefectslatexComponent } from './modules/natural_latex/defectslatex/defectslatex.component';
import { BeddingComponent } from './modules/bedding/bedding/bedding.component';
import { OurlatexComponent } from './modules/natural_latex/ourlatex/ourlatex.component';
import { FabricdetailsComponent } from './dialogs/fabricdetails/fabricdetails.component';
import {MatIconModule} from '@angular/material/icon'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomedashboardComponent,
    VideoplayerComponent,
    TheptessagaComponent,
    SustainabilityComponent,
    SocialresponceComponent,
    ProductprocessComponent,
    OrganiclatexComponent,

    PaddingtonComponent,
    BenifitsComponent,
    HarvestingComponent,
    NatrualvssyntheticComponent,
    ZonemattressComponent,
    EmpoosedmattressComponent,
    TemperatureComponent,
    MattresstoppersComponent,
    MedicalmattressComponent,
    DefectslatexComponent,
    BeddingComponent,
    OurlatexComponent,
    FabricdetailsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
