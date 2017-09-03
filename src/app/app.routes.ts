import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    { path: 'homepage', component: HomepageComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contact', component: ContactComponent }
    
    
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
