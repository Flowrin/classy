import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CollectionComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
