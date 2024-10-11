import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorfolioComponent } from './porfolio.component';
import { PorfolioRoutingModule } from './porfolio-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PorfolioComponent,
    HeaderComponent,
    BannerComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PorfolioRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PorfolioModule { }
