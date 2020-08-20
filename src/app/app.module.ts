import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrowComponent } from './elements/arrow/arrow.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowComponent,
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    ServicesComponent,
    ContactComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
