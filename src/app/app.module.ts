import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { ProductsComponent } from './components/products/products.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ButtonBgDirective } from './directives/button-bg.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
        ProductsComponent,
        AdvantageComponent,
        ButtonBgDirective,
        CurrencyPipe,
        PhonePipe,
        ShortDescriptionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
