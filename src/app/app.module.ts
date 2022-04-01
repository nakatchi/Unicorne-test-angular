import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateUnicornComponent } from './create-unicorn/create-unicorn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { MatesComponent } from './mates/mates.component';
import {MatSelectModule} from '@angular/material/select';
import { DoBabyComponent } from './do-baby/do-baby.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    HomeComponent,
    NotFoundComponent,
    CreateUnicornComponent,
    UnicornCardComponent,
    MatesComponent,
    DoBabyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
