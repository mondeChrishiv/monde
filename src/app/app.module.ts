import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import 'hammerjs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component'
import { BodyComponent } from './body/body.component'
import { DataService } from './data.service';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from './material.module'
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { ProductSearchComponent } from './product-search/product-search.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProductsComponent,
    ProductSearchComponent
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MaterialModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
