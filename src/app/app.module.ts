import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component'
import { BodyComponent } from './body/body.component'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
