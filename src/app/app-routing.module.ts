import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomedashboardComponent } from './modules/homedashboard/homedashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { VideoplayerComponent } from './modules/videoplayer/videoplayer.component';
import { TheptessagaComponent } from './modules/abouts_us/theptessaga/theptessaga.component';
import { SustainabilityComponent } from './modules/abouts_us/sustainability/sustainability.component';
import { SocialresponceComponent } from './modules/abouts_us/socialresponce/socialresponce.component';
import { ProductprocessComponent } from './modules/abouts_us/productprocess/productprocess.component';
import { OrganiclatexComponent } from './modules/abouts_us/organiclatex/organiclatex.component';
import { PaddingtonComponent } from './modules/latex/paddington/paddington.component';
import { BenifitsComponent } from './modules/natural_latex/benifits/benifits.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomedashboardComponent,pathMatch:'full'

  },

  { path: 'Home', component: HomedashboardComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'videoplayer', component: VideoplayerComponent },

  { path: 'vedha', component: TheptessagaComponent },
  { path: 'sustainability', component: SustainabilityComponent },
  { path: 'socialresponce', component: SocialresponceComponent },
  { path: 'productprocess', component: ProductprocessComponent },
  { path: 'organiclatex', component: OrganiclatexComponent },
  { path: 'latex/:id', component: PaddingtonComponent },

  { path: 'benifits', component: BenifitsComponent },
  { path: 'harvesting', component: HarvestingComponent },
  { path: 'natrualvssynthetic', component: NatrualvssyntheticComponent },
  { path: 'defectslatex', component: DefectslatexComponent },
  { path: 'ourlatex', component: OurlatexComponent },
  

  { path: 'zonedmattress', component: ZonemattressComponent },
  { path: 'embossedmattress', component: EmpoosedmattressComponent },
  { path: 'temperaturemattress', component: TemperatureComponent },
  { path: 'mattresstoppers', component: MattresstoppersComponent },
  { path: 'medicalmatttess', component: MedicalmattressComponent },
  
  { path: 'bedding', component: BeddingComponent },

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
