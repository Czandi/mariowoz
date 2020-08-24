import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
