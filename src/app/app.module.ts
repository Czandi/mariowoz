import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { ArrowComponent } from './elements/arrow/arrow.component';
import { FullViewDirective } from './full-view/full-view.directive';
import { ScrollbarComponent } from './elements/scrollbar/scrollbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactInformationComponent } from './contact/contact-information/contact-information.component';
import * as Hammer from 'hammerjs';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    ServicesComponent,
    ContactComponent,
    FormComponent,
    ArrowComponent,
    FullViewDirective,
    ScrollbarComponent,
    ContactInformationComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
