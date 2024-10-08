import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxSonnerToaster } from 'ngx-sonner';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSonnerToaster],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
