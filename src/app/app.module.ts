import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes =[
  {path: '', component: CarComponent},
  {path: 'about', component: ContactsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
  
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
