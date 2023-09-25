import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DarkModeBtnComponent } from './components/dark-mode-btn/dark-mode-btn.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardBtnsComponent } from './components/card-btns/card-btns.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DarkModeBtnComponent,
    BannerComponent,
    ProjectsComponent,
    CardBtnsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
