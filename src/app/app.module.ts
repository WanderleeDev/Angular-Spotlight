import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DarkModeBtnComponent } from './components/dark-mode-btn/dark-mode-btn.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardBtnsComponent } from './components/card-btns/card-btns.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoriaComponent } from './components/noria/noria.component';
import { BtnFormSubmitComponent } from './components/btn-form-submit/btn-form-submit.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { FormatterUrlPipe } from './pipes/formatter-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DarkModeBtnComponent,
    BannerComponent,
    ProjectsComponent,
    CardBtnsComponent,
    ContactComponent,
    NoriaComponent,
    BtnFormSubmitComponent,
    CardProjectComponent,
    LightboxComponent,
    FormatterUrlPipe,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
